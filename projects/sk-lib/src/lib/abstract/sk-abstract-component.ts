import {Directive, EventEmitter, Input, OnDestroy, Output, TemplateRef} from '@angular/core';
import {
  SKDeleteAction,
  SKDeleteAndGetAction,
  SKIEntity,
  SkIStateModel,
  SKUpdateAction,
  SKUpdateAllAction,
  SKUpdateAndGetAction
} from '@sk-framework/sk-core';
import {finalize, map} from 'rxjs/operators';
import {FormGroup} from '@angular/forms';
import {SKCreateAction, SKCreateAllAction, SKCreateAndGetAction, SKIPagination} from '@sk-framework/sk-core';
import {Helpers} from '../utils';
import {Observable, Subscription} from 'rxjs';
import {SkFormConfig, SKConfigState} from '@sk-framework/sk-core';
import {SkComponentsData} from '../services';
import {ActivatedRoute, Router} from '@angular/router';
import {DialogComponentData, SkDialogComponent} from '../components/sk-dialogs/sk-dialog.component';
import {ComponentType} from '@angular/cdk/overlay';
import {MatDialogRef} from '@angular/material/dialog';
import {SkUserDomain} from '../sk-user-management/sk-user/classes/sk-user-domain';

@Directive()
// tslint:disable-next-line:directive-class-suffix
export abstract class SkAbstractComponent<T extends SKIEntity<T, ID>,
  S extends SkIStateModel<T>,
  ID extends string | number = any,
  F = any> implements OnDestroy {


  @Input() form?: FormGroup = this.data.formBuilder.group({});
  @Input() entity?: T = this.state().current;
  @Input() disableButton = false;
  @Input() simplePersist = false;
  @Input() simpleDelete = false;
  @Input() dialog = false;
  @Input() pagination: SKIPagination = this.state().pagination ?? this.data.store.selectSnapshot(SKConfigState.selector).pagination;
  @Output() afterPersist: EventEmitter<PersistActions> = new EventEmitter<PersistActions>();
  @Output() afterDelete: EventEmitter<T> = new EventEmitter<T>();
  @Output() formChange: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  formConfig: SkFormConfig = this.data.store.selectSnapshot(SKConfigState.formSelector);
  dialogRef: MatDialogRef<any> | undefined;
  dialogSubscription: Subscription = new Subscription();
  subscriptions: Subscription = new Subscription();


  protected constructor(protected data: SkComponentsData,
                        protected router: Router,
                        protected activatedRoute: ActivatedRoute) {
    this.subscribeFormChange();
  }


  /*****************************************************************************
   ****************************** ABSTRACTS METHODS ****************************
   *****************************************************************************/

  abstract state(): S;

  abstract get actions(): SkAbstractFormAction<T, ID>;


  /*****************************************************************************
   ****************************** UTILS METHODS ****************************
   *****************************************************************************/


  saveOrUpdate(
    entity: T = this.form?.getRawValue(),
    id: ID = this.form?.getRawValue()?.id ?? this.entity?.id,
    success: (value: T) => any = () => {
      if (!this.dialog) {
        this.router.navigate(([id ? '../../' : '../']), {relativeTo: this.activatedRoute}).then();
      }
    },
    error?: (error: any) => any,
    finalizeFunction?: () => any
  ): Promise<T> {
    return id && (id + '').trim().length > 0
      ? this.update(entity, id, success, error, finalizeFunction)
      : this.create(entity, success, error, finalizeFunction);
  }

  saveAndGetOrUpdateAndGet(entity: T = this.form?.getRawValue(),
                           id: ID = this.form?.getRawValue()?.id ?? this.entity?.id,
                           success: (value: T[]) => any = () => {
                             if (!this.dialog) {
                               this.router.navigate([id ? '../../' : '../'], {relativeTo: this.activatedRoute}).then();
                             }
                           },
                           error?: (error: any) => any,
                           finalizeFunction?: () => any
  ): Promise<T[]> {
    return id && (id + '').trim().length > 0
      ? this.updateAndGet(entity, id, success, error, finalizeFunction)
      : this.createAndGet(entity, success, error, finalizeFunction);
  }

  checkAndPersist(entity: T = this.form?.getRawValue(),
                  id: ID = this.form?.getRawValue()?.id ?? this.entity?.id,
                  success: (value: T[] | T) => any = () => {
                    if (!this.dialog) {
                      this.router.navigate([id ? '../../' : '../'], {relativeTo: this.activatedRoute}).then();
                    }
                  },
                  error?: (error: any) => any,
                  finalizeFunction?: () => any
  ): Promise<T | T[]> {
    return this.simplePersist
      ? this.saveOrUpdate(entity, id, success, error, finalizeFunction)
      : this.saveAndGetOrUpdateAndGet(entity, id, success, error, finalizeFunction);
  }

  checkAndDelete(entity: T = this.entity as any,
                 success?: (value: T) => any,
                 error?: (error: any) => any,
                 finalizeFunction?: () => any): void {
    this.simpleDelete ? this.delete(entity, success, error, finalizeFunction) : this.deleteAndGet(entity, success, error, finalizeFunction);
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
         success: (value: T) => any = () => {
           if (!this.dialog) {
             this.router.navigate(['../'], {relativeTo: this.activatedRoute}).then();
           }
         },
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
      this.afterPersist.emit({type: PersistActionType.CREATE, entity: value});
      success?.(value);
    }, error);
  }

  update(entity: T = this.form?.getRawValue(),
         id: ID = this.form?.getRawValue()?.id ?? this.entity?.id,
         success: (value: T) => any = () => {
           if (!this.dialog) {
             this.router.navigate(['../../'], {relativeTo: this.activatedRoute}).then();
           }
         },
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
      this.afterPersist.emit({type: PersistActionType.UPDATE, entity: value});
      success?.(value);
    }, error);
  }


  createAndGet(entity: T = this.form?.getRawValue(),
               success: (value: T[]) => any = () => {
                 if (!this.dialog) {
                   this.router.navigate(['..'], {relativeTo: this.activatedRoute}).then();
                 }
               },
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
      this.afterPersist.emit({type: PersistActionType.CREATE_AND_GET, entities: value});
    }, error);
  }

  updateAndGet(entity: T = this.form?.getRawValue(),
               id: ID = this.form?.getRawValue()?.id ?? this.entity?.id,
               success: (value: T[]) => any = () => {
                 if (!this.dialog) {
                   this.router.navigate(['../../'], {relativeTo: this.activatedRoute}).then();
                 }
               },
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
      this.afterPersist.emit({type: PersistActionType.UPDATE_AND_GET, entities: value});
    }, error);
  }


  delete(entity: T,
         success?: (value: T) => any,
         error?: (error: any) => any,
         finalizeFunction?: () => any): Promise<T> {
    if (!this.actions.delete) {
      throw new Error('DeleteAndGet action not found');
    }

    const observable = this.data.store
      .dispatch(this.actions.delete(entity.id as any)).pipe(finalize(() => finalizeFunction?.()));
    return Helpers.subscribeAndReturnPromise(observable, value => {
      this.afterDelete.emit(entity);
      success?.(value);
    }, err => error?.(err));
  }


  deleteAndGet(entity: T,
               success?: (value: T) => any,
               error?: (error: any) => any,
               finalizeFunction?: () => any): Promise<T> {
    if (!this.actions.deleteAndGet) {
      throw new Error('Delete action not found');
    }
    const observable = this.data.store
      .dispatch(this.actions.deleteAndGet(entity.id as any, Helpers.safePagination(this.state(), this.data.store)))
      .pipe(finalize(() => finalizeFunction?.()));

    return Helpers.subscribeAndReturnPromise(observable, value => {
      this.afterDelete.emit(entity);
      success?.(value);
    }, err => error?.(err));
  }

  compareById(first: { id: any }, second: { id: any }): boolean {
    return first && second && first.id === second.id;
  }


  openDialogComponent(data: DialogComponentData | TemplateRef<any>,
                      config?: any,
                      afterClosed?: (result: any) => any,
                      exc: 'ALL' | 'EXIST' = 'EXIST'): void {
    const dialogComponentData: DialogComponentData = (data instanceof TemplateRef) ? {dialogFullContent: data} : data;
    this.openComponentDialog(SkDialogComponent, {data: dialogComponentData, ...(config ? config : {})}, afterClosed, exc);
  }

  openComponentDialog(component: ComponentType<any>,
                      config?: any,
                      afterClosed?: (result: any) => any,
                      exc: 'ALL' | 'EXIST' = 'EXIST'): void {
    this.dialogRef = this.data.dialog.open(component, config);
    this.dialogSubscription = this.dialogRef.afterClosed().subscribe(result => {
      if (afterClosed && (exc === 'ALL' || !!result)) {
        afterClosed(result);
      }
    });
  }

  openDeleteDialog(model: T = this.entity as any,
                   data: DialogComponentData = this.deleteDialogComponentData,
                   config?: any,
                   afterClosed: (result: any) => any = () => this.checkAndDelete(model),
                   exc: 'ALL' | 'EXIST' = 'EXIST'): void {
    this.openComponentDialog(SkDialogComponent, {data, ...(config ? config : {})}, afterClosed, exc);
  }

  get deleteDialogComponentData(): DialogComponentData {
    return {
      dialogContentString: 'Etes-vous sûr de vouloir supprimer cet élément ?',
      title: 'Suppression de l\'élément',
      cancelTitle: 'Non',
      validateTitle: 'Oui',
    };
  }


  subscribeFormChange(): void {
    this.subscriptions.add(this.form?.valueChanges.subscribe(() => this.formChange.emit(this.form)));
  }

  ngOnDestroy(): void {
    this.subscriptions?.unsubscribe();
    this.dialogSubscription?.unsubscribe();
  }
}

export interface SkAbstractFormAction<T extends SKIEntity<T, ID>, ID extends string | number = any> {
  create?: (entity: T, others?: any) => SKCreateAction<T, ID>;
  createAndGet?: (entity: T, pagination: SKIPagination, others?: any) => SKCreateAndGetAction<T, ID>;
  createAll?: (entities: T[], others?: any) => SKCreateAllAction<T, ID>;
  update?: (entity: T, id: ID, others?: any) => SKUpdateAction<T, ID>;
  updateAndGet?: (entity: T, id: ID, pagination: SKIPagination, others?: any) => SKUpdateAndGetAction<T, ID>;
  updateAll?: (entities: T[], others?: any) => SKUpdateAllAction<T, ID>;
  delete?: (id: ID, others?: any) => SKDeleteAction<T, ID>;
  deleteAndGet?: (id: ID, pagination: SKIPagination, others?: any) => SKDeleteAndGetAction<T, ID>;
}


export interface PersistActions<T = any> {
  type: PersistActionType;
  entity?: T;
  entities?: T[];
}

export enum PersistActionType {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
  CREATE_AND_GET = 'CREATE_AND_GET',
  UPDATE_AND_GET = 'UPDATE_AND_GET'
}
