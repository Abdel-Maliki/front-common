import {Directive, Input} from '@angular/core';
import {Store} from '@ngxs/store';
import {SKIEntity, SkIStateModel, SkServiceData, SKUpdateAction, SKUpdateAllAction, SKUpdateAndGetAction} from 'sk-core';
import {finalize, map} from 'rxjs/operators';
import {FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {SKCreateAction, SKCreateAllAction, SKCreateAndGetAction, SKIPagination} from 'sk-core';

@Directive()
// tslint:disable-next-line:directive-class-suffix
export abstract class SkAbstractFormComponent<T extends SKIEntity<T, ID>,
  S extends SkIStateModel<T>,
  ID extends string | number = any,
  F = any> {

  @Input() form: FormGroup | undefined;
  @Input() entity?: T = this.state().current;
  @Input() disableButton = false;


  protected constructor(protected store: Store, protected serviceData: SkServiceData) {
  }


  abstract state(): S;

  abstract get actions(): SkAbstractFormAction<T, ID>;


  subscribeAndReturnPromise(observable: Observable<any>,
                            success: () => any = this.emptyFunction,
                            error: () => any = this.emptyFunction,
  ): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      observable.toPromise()
        .then(value => {
          console.log('Class: SkAbstractFormComponent, Function: , Line 37 value(): '
            , value);
          success();
          resolve(value);
        })
        .catch(reason => {
          console.log('Class: SkAbstractFormComponent, Function: , Line 43 reason(): '
            , reason);
          error();
          reject(reason);
        });
    });
  }

  create(entity: T = this.form?.getRawValue(),
         success: () => any = this.emptyFunction,
         error: () => any = this.emptyFunction,
         finalizeFunction: () => any = this.emptyFunction): Promise<T> {

    this.disableButton = true;

    if (!this.actions.create) {
      throw new Error('Create action not found');
    }

    const observable = this.store
      .dispatch(this.actions.create(entity))
      .pipe(
        map(() => this.state()),
        finalize(() => {
          finalizeFunction();
          this.disableButton = false;
        }),
      );

    return this.subscribeAndReturnPromise(observable, success, error);
  }

  emptyFunction(): any {
  }

  update(entity: T = this.form?.getRawValue(),
         id: ID = this.form?.getRawValue()?.id,
         success: () => any = this.emptyFunction,
         error: () => any = this.emptyFunction,
         finalizeFunction: () => any = this.emptyFunction): Promise<T> {
    this.disableButton = true;

    if (!this.actions.update) {
      throw new Error('Create action not found');
    }

    const observable = this.store.dispatch(this.actions.update(entity, id))
      .pipe(
        map(() => this.state),
        finalize(() => {
          finalizeFunction();
          this.disableButton = false;
        }),
      );

    return this.subscribeAndReturnPromise(observable, success, error);
  }

  saveOrUpdate(): Promise<T> {
    return !!this.entity?.id && this.entity.id > 0 ? this.update() : this.create();
  }

  get haseUpdate(): boolean {
    return !!this.entity?.id;
  }

  get buttonTitle(): string {
    return this.haseUpdate ? 'Modifier' : 'Ajouter';
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
