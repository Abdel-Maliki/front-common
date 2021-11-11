import {Directive, EventEmitter, Input} from '@angular/core';
import {SKIEntity, SkIStateModel, SKUpdateAction, SKUpdateAllAction, SKUpdateAndGetAction} from '@sk-framework/sk-core';
import {finalize, map} from 'rxjs/operators';
import {FormGroup} from '@angular/forms';
import {SKCreateAction, SKCreateAllAction, SKCreateAndGetAction, SKIPagination} from '@sk-framework/sk-core';
import {Helpers} from '../utils';
import {Observable} from 'rxjs';
import {SkFormConfig, SKConfigState} from '@sk-framework/sk-core';
import {SkComponentsData} from '../services/sk-components-data';
import {ActivatedRoute, Router} from '@angular/router';

@Directive()
// tslint:disable-next-line:directive-class-suffix
export abstract class SkAbstractFormComponent<T extends SKIEntity<T, ID>,
  S extends SkIStateModel<T>,
  ID extends string | number = any,
  F = any> {

  @Input() form: FormGroup | undefined;
  @Input() entity?: T = this.state().current;
  @Input() disableButton = false;
  @Input() simplePersist = false;
  @Input() afterCreate: EventEmitter<T> = new EventEmitter<T>();
  @Input() afterUpdate: EventEmitter<T> = new EventEmitter<T>();
  @Input() afterCreateAndGet: EventEmitter<T[]> = new EventEmitter<T[]>();
  @Input() afterUpdateAndGet: EventEmitter<T[]> = new EventEmitter<T[]>();
  formConfig: SkFormConfig = this.data.store.selectSnapshot(SKConfigState.formSelector);


  protected constructor(protected data: SkComponentsData,
                        protected router: Router,
                        protected activatedRoute: ActivatedRoute) {
  }


  /*****************************************************************************
   ****************************** ABSTRACTS METHODS ****************************
   *****************************************************************************/

  abstract state(): S;

  abstract get actions(): SkAbstractFormAction<T, ID>;


  /*****************************************************************************
   ****************************** UTILS METHODS ****************************
   *****************************************************************************/


  saveOrUpdate(): Promise<T> {
    return !!this.entity?.id && (this.entity.id + '').trim().length > 0 ? this.update() : this.create();
  }

  saveAndGetOrUpdateAndGet(): Promise<T[]> {
    return !!this.entity?.id && (this.entity.id + '').trim().length > 0 ? this.updateAndGet() : this.createAndGet();
  }

  checkAndPersist(): Promise<T | T[]> {
    return this.simplePersist ? this.saveOrUpdate() : this.saveAndGetOrUpdateAndGet();
  }


  get haseUpdate(): boolean {
    return !!this.entity?.id;
  }

  get buttonTitle(): string {
    return this.haseUpdate ? 'Modifier' : 'Ajouter';
  }


  /*****************************************************************************
   ***********************************API METHODS********************************
   /*****************************************************************************/

  create(entity: T = this.form?.getRawValue() ?? this.entity,
         success: (value: T) => any = () => this.router.navigate(['../'], {relativeTo: this.activatedRoute}),
         error?: (error: any) => any,
         finalizeFunction?: () => any): Promise<T> {

    this.disableButton = true;

    if (!this.actions.create) {
      throw new Error('Create action not found');
    }

    const observable = this.data.store
      .dispatch(this.actions.create(entity))
      .pipe(
        map(() => this.state().lastCreate as T),
        finalize(() => {
          finalizeFunction?.();
          this.disableButton = false;
        }),
      );

    return Helpers.subscribeAndReturnPromise(observable, value => {
      this.afterCreate.emit(value);
      success?.(value);
    }, error);
  }

  update(entity: T = this.form?.getRawValue(),
         id: ID = this.form?.getRawValue()?.id ?? this.entity?.id,
         success: (value: T) => any = () => this.router.navigate(['../../'], {relativeTo: this.activatedRoute}),
         error?: (error: any) => any,
         finalizeFunction?: () => any): Promise<T> {
    this.disableButton = true;

    if (!this.actions.update) {
      throw new Error('Create action not found');
    }

    const observable = this.data.store.dispatch(this.actions.update(entity, id))
      .pipe(
        map(() => this.state().lastUpdate as T),
        finalize(() => {
          finalizeFunction?.();
          this.disableButton = false;
        }),
      );

    return Helpers.subscribeAndReturnPromise(observable, value => {
      this.afterUpdate.emit(value);
      success?.(value);
    }, error);
  }


  createAndGet(entity: T = this.form?.getRawValue(),
               success: (value: T[]) => any = () => this.router.navigate(['../'], {relativeTo: this.activatedRoute}),
               error?: (error: any) => any,
               finalizeFunction?: () => any): Promise<T[]> {

    this.disableButton = true;

    if (!this.actions.createAndGet) {
      throw new Error('Create action not found');
    }

    const observable = this.data.store
      .dispatch(this.actions.createAndGet(entity, Helpers.safePagination(this.state(), this.data.store)))
      .pipe(
        map(() => this.state().lastCreates as T[]),
        finalize(() => {
          if (finalizeFunction) {
            finalizeFunction();
          }
          this.disableButton = false;
        }),
      );


    return Helpers.subscribeAndReturnPromise(observable, (value) => {
      if (success) {
        success(value);
      }
      this.afterCreateAndGet.emit();
    }, error);
  }

  updateAndGet(entity: T = this.form?.getRawValue(),
               id: ID = this.form?.getRawValue()?.id ?? this.entity?.id,
               success: (value: T[]) => any = () => this.router.navigate(['../../'], {relativeTo: this.activatedRoute}),
               error?: (error: any) => any,
               finalizeFunction?: () => any): Promise<T[]> {
    this.disableButton = true;

    if (!this.actions.updateAndGet) {
      throw new Error('Create action not found');
    }

    const observable: Observable<T[]> = this.data.store
      .dispatch(this.actions.updateAndGet(entity, id, Helpers.safePagination(this.state(), this.data.store)))
      .pipe(
        map(() => this.state().lastCreates as T[]),
        finalize(() => {
          if (finalizeFunction) {
            finalizeFunction();
          }
          this.disableButton = false;
        }),
      );

    return Helpers.subscribeAndReturnPromise(observable, value => {
      if (success) {
        success(value);
      }
      this.afterUpdateAndGet.emit(value);
    }, error);
  }

  compareById(first: { id: any }, second: { id: any }): boolean {
    return first && second && first.id === second.id;
  }
}

export interface SkAbstractFormAction<T extends SKIEntity<T, ID>, ID extends string | number = any> {
  create?: (entity: T, others?: any) => SKCreateAction<T, ID>;
  createAndGet?: (entity: T, pagination: SKIPagination, others?: any) => SKCreateAndGetAction<T, ID>;
  createAll?: (entities: T[], others?: any) => SKCreateAllAction<T, ID>;
  update?: (entity: T, id: ID, others?: any) => SKUpdateAction<T, ID>;
  updateAndGet?: (entity: T, id: ID, pagination: SKIPagination, others?: any) => SKUpdateAndGetAction<T, ID>;
  updateAll?: (entities: T[], others?: any) => SKUpdateAllAction<T, ID>;
}
