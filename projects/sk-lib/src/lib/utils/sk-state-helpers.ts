import {Observable, of, throwError} from 'rxjs';
import {StateContext} from '@ngxs/store';
import {catchError, map, tap} from 'rxjs/operators';
import {
  SKCreateAction,
  SKCreateAllAction,
  SKCreateAndGetAction,
  SKDeleteAction,
  SKDeleteAllAction,
  SKDeleteAllAndGetAction,
  SKDeleteAndGetAction,
  SKGetAction,
  SkGetAllAction,
  SKPageAction,
  SKUpdateAction,
  SKUpdateAllAction,
  SKUpdateAndGetAction,
  InvalidPasswordAction,
  ISkService,
  SkIActionsError,
  SKIEntity, SkIResponseWrapper,
  SkIStateModel,
  SKSetCurrentAction,
  SKSetCurrentForFormAction
} from '@sk-framework/sk-core';
import {Helpers} from './helpers';

/**
 * @author abdel-maliki
 */

export abstract class SkStateHelpers {

  static readonly INVALID_PASSWORD_MESSAGE = 'Le mot de passe est incorrect';

  static success<K,
    T extends SKIEntity<T, ID>,
    ST extends SkIStateModel<T, F>,
    ID extends string | number = any,
    F = { [key: string]: any }>(
    response: SkIResponseWrapper<K, F>,
    ctx: StateContext<any>,
    val: keyof ST,
    actionError: keyof SkIActionsError,
    updatePageInf: boolean = false,
    loadEntities?: boolean): Partial<ST> {

    const partial: Partial<ST> = {};
    partial.actionsError = ({...ctx.getState().actionError, [actionError]: undefined} as any);

    if (response.isNotValid()) {
      partial.actionsError = ({...ctx.getState().actionError, [actionError]: {error: response.error, exist: true}} as any);
    }

    if (val && response.data && response.isValid) {
      partial[val] = (response.data as any);
      if (loadEntities !== null && loadEntities !== undefined) {
        partial.loadEntities = loadEntities;
      }

      if (updatePageInf) {
        partial.pagination = {...ctx.getState().pagination, ...response.pagination};
      }
    }

    if (response.isNotValid() && response.error?.message === SkStateHelpers.INVALID_PASSWORD_MESSAGE) {
      ctx.dispatch(new InvalidPasswordAction());
    }

    return partial;
  }

  static setState<T,
    ST extends SkIStateModel<T, F, E>,
    S extends ISkService<T>,
    F = any,
    E extends SkIActionsError = SkIActionsError,
    ID extends string | number = any,
    RETURN_TYPE extends T | Array<T> = T>(
    observable: Observable<SkIResponseWrapper<T | Array<T>>>,
    service: S,
    ctx: StateContext<ST>,
    fieldToSet: keyof ST,
    actionError: keyof SkIActionsError,
    updatePageInf: boolean = false,
    loadEntities?: boolean,
  ): Observable<RETURN_TYPE> {
    return observable
      .pipe(
        map((value: SkIResponseWrapper<T | Array<T>>) => Helpers.fromJsonResponseWrapper(value, service)),
        tap(response => ctx.patchState({...this.success(response, ctx, fieldToSet, actionError, updatePageInf, loadEntities)})),
        catchError(err => this.error(err, ctx, actionError))
      );
  }

  private static error<T, ST extends SkIStateModel<T, F, E>, S extends ISkService<T>, F = any, E extends SkIActionsError = SkIActionsError>(
    err: any, ctx: StateContext<ST>,
    actionError: keyof SkIActionsError): Observable<any> {

    ctx.patchState(({
      actionsError: {
        ...ctx.getState().actionsError,
        ...{[actionError]: {error: err ?? {error: 'Not found'}, exist: true}}
      }
    } as Partial<ST>));
    return throwError(err);
  }

  /**************************************************************
   ******************************* READ *************************
   **************************************************************/

  static get<T extends SKIEntity<T, ID>,
    ST extends SkIStateModel<T, F, E>,
    S extends ISkService<T>, F = any, E extends SkIActionsError = SkIActionsError,
    ID extends string | number = any, TM = T>(
    service: S,
    ctx: StateContext<ST>,
    action: SKGetAction<ID>,
  ): Observable<T> {
    return SkStateHelpers.setState(service.get(action.payload), service, ctx, 'entity', 'get', false, undefined);
  }

  static getAll<T extends SKIEntity<T, ID>,
    ST extends SkIStateModel<T, F, E>,
    S extends ISkService<T>, F = any, E extends SkIActionsError = SkIActionsError,
    ID extends string | number = any,
    A = any>(
    service: S,
    ctx: StateContext<ST>,
    action: SkGetAllAction<A>,
  ): Observable<T> {
    return SkStateHelpers.setState(service.getAll(action.payload), service, ctx, 'all', 'getAll', false, undefined);
  }

  static pageElements<T extends SKIEntity<T, ID>,
    ST extends SkIStateModel<T, F, E>,
    S extends ISkService<T>, F = any, E extends SkIActionsError = SkIActionsError,
    ID extends string | number = any,
    A = any>(
    service: S,
    ctx: StateContext<ST>,
    action: SKPageAction<T, ID>,
  ): Observable<T> {
    return SkStateHelpers.setState(
      service.pageElements(action.payload.pagination, action.payload.others),
      service,
      ctx,
      'entities',
      'page',
      true,
      false
    );
  }


  /**********************************************************
   *************************** WRITE ************************
   **********************************************************/


  static create<T extends SKIEntity<T, ID>,
    ST extends SkIStateModel<T, F, E>,
    S extends ISkService<T>, F = any, E extends SkIActionsError = SkIActionsError,
    ID extends string | number = any,
    A = any>(
    service: S,
    ctx: StateContext<ST>,
    action: SKCreateAction<T, ID>,
  ): Observable<T> {
    return SkStateHelpers.setState(
      service.create(action.payload.entity, action.payload.others),
      service,
      ctx,
      'lastCreate',
      'create',
      false,
      true
    );
  }

  static createAndGet<T extends SKIEntity<T, ID>,
    ST extends SkIStateModel<T, F, E>,
    S extends ISkService<T>, F = any, E extends SkIActionsError = SkIActionsError,
    ID extends string | number = any,
    A = any>(
    service: S,
    ctx: StateContext<ST>,
    action: SKCreateAndGetAction<T, ID>,
  ): Observable<T> {
    return SkStateHelpers.setState(
      service.createAndGet({entity: action.payload.entity, pagination: action.payload.pagination}, action.payload.others),
      service,
      ctx,
      'entities',
      'createAndGet',
      true,
      false
    );
  }

  static createAll<T extends SKIEntity<T, ID>,
    ST extends SkIStateModel<T, F, E>,
    S extends ISkService<T>, F = any, E extends SkIActionsError = SkIActionsError,
    ID extends string | number = any,
    A = any>(
    service: S,
    ctx: StateContext<ST>,
    action: SKCreateAllAction<T, ID>,
  ): Observable<T> {

    if (typeof service.createAll === 'undefined') {
      throw new Error('la fonction saveAll n\'as pas été implementé');
    }

    return SkStateHelpers.setState(
      service.createAll(action.payload.entities, action.payload.others),
      service,
      ctx,
      'lastCreates',
      'createAll',
      false,
      true
    );
  }

  /**********************************************************
   *************************** UPDATE ************************
   **********************************************************/

  static update<T extends SKIEntity<T, ID>,
    ST extends SkIStateModel<T, F, E>,
    S extends ISkService<T>, F = any, E extends SkIActionsError = SkIActionsError,
    ID extends string | number = any,
    A = any>(
    service: S,
    ctx: StateContext<ST>,
    action: SKUpdateAction<T, ID>,
  ): Observable<T> {
    return SkStateHelpers.setState(
      service.update(action.payload.entity, action.payload.id, action.payload.others),
      service,
      ctx,
      'lastUpdate',
      'update',
      false,
      true
    );
  }

  static updateAndGet<T extends SKIEntity<T, ID>,
    ST extends SkIStateModel<T, F, E>,
    S extends ISkService<T>, F = any, E extends SkIActionsError = SkIActionsError,
    ID extends string | number = any,
    A = any>(
    service: S,
    ctx: StateContext<ST>,
    action: SKUpdateAndGetAction<T, ID>,
  ): Observable<T> {
    return SkStateHelpers.setState(
      service.updateAndGet(
        {entity: action.payload.entity, pagination: action.payload.pagination},
        action.payload.id,
        action.payload.others),
      service,
      ctx,
      'entities',
      'updateAndGet',
      true,
      false
    );
  }

  static updateAll<T extends SKIEntity<T, ID>,
    ST extends SkIStateModel<T, F, E>,
    S extends ISkService<T>, F = any, E extends SkIActionsError = SkIActionsError,
    ID extends string | number = any,
    A = any>(
    service: S,
    ctx: StateContext<ST>,
    action: SKUpdateAllAction<T, ID>,
  ): Observable<T> {

    if (typeof service.updateAll === 'undefined') {
      throw new Error('la fonction saveAll n\'as pas été implementé');
    }

    return SkStateHelpers.setState(
      service.updateAll(action.payload.entities, action.payload.others),
      service,
      ctx,
      'lastUpdates',
      'updateAll',
      false,
      true
    );
  }


  /**********************************************************
   *************************** DELETE ************************
   **********************************************************/

  static delete<T extends SKIEntity<T, ID>,
    ST extends SkIStateModel<T, F, E>,
    S extends ISkService<T>, F = any, E extends SkIActionsError = SkIActionsError,
    ID extends string | number = any,
    A = any>(
    service: S,
    ctx: StateContext<ST>,
    action: SKDeleteAction<T, ID>,
  ): Observable<T> {
    return SkStateHelpers.setState(
      service.delete(action.payload.id, action.payload.others),
      service,
      ctx,
      'lastDelete',
      'delete',
      false,
      true,
    );
  }

  static deleteAndGet<T extends SKIEntity<T, ID>,
    ST extends SkIStateModel<T, F, E>,
    S extends ISkService<T>, F = any, E extends SkIActionsError = SkIActionsError,
    ID extends string | number = any,
    A = any>(
    service: S,
    ctx: StateContext<ST>,
    action: SKDeleteAndGetAction<T, ID>,
  ): Observable<T> {
    return SkStateHelpers.setState(
      service.deleteAndGet(action.payload.pagination, action.payload.id, action.payload.others),
      service,
      ctx,
      'entities',
      'deleteAndGet',
      true,
      false
    );
  }

  static deleteAllAndGet<T extends SKIEntity<T, ID>,
    ST extends SkIStateModel<T, F, E>,
    S extends ISkService<T>, F = any, E extends SkIActionsError = SkIActionsError,
    ID extends string | number = any,
    A = any>(
    service: S,
    ctx: StateContext<ST>,
    action: SKDeleteAllAndGetAction<T, ID>,
  ): Observable<T> {

    if (typeof service.deleteAllAndGet === 'undefined') {
      throw new Error('la fonction deleteAllAndGet n\'as pas été implementé');
    }

    return SkStateHelpers.setState(
      service.deleteAllAndGet(action.payload.entities, action.payload.pagination, action.payload.others),
      service,
      ctx,
      'entities',
      'deleteAllAndGet',
      true,
      false
    );
  }


  static deleteAll<T extends SKIEntity<T, ID>,
    ST extends SkIStateModel<T, F, E>,
    S extends ISkService<T>, F = any, E extends SkIActionsError = SkIActionsError,
    ID extends string | number = any,
    A = any>(
    service: S,
    ctx: StateContext<ST>,
    action: SKDeleteAllAction<T, ID>,
  ): Observable<T> {

    if (typeof service.deleteAll === 'undefined') {
      throw new Error('la fonction deleteAll n\'as pas été implementé');
    }

    const ids: ID[] = action.payload.entities.map(value => value.id as ID);

    return SkStateHelpers.setState(
      service.deleteAll(ids, action.payload.others),
      service,
      ctx,
      'lastDeletes',
      'deleteAll',
      false,
      true
    );
  }


  /**********************************************************
   ************************** OTHERS ************************
   **********************************************************/


  static setCurrent<T extends SKIEntity<T, ID>,
    ST extends SkIStateModel<T, F, E>,
    S extends ISkService<T>, F = any, E extends SkIActionsError = SkIActionsError,
    ID extends string | number = any,
    A = any>(
    service: S,
    ctx: StateContext<ST>,
    action: SKSetCurrentAction<T>,
  ): Observable<any> {
    return of(action.payload).pipe(tap(() => ctx.patchState(({current: action.payload} as Partial<ST>))));
  }

  static setCurrentForForm<T extends SKIEntity<T, ID>,
    ST extends SkIStateModel<T, F, E>,
    S extends ISkService<T>, F = any, E extends SkIActionsError = SkIActionsError,
    ID extends string | number = any,
    A = any>(
    service: S,
    ctx: StateContext<ST>,
    action: SKSetCurrentForFormAction<ID>,
    newInstance: T,
  ): Observable<any> {
    return action.payload
      ? this.setState(service.get(action.payload), service, ctx, 'current', 'get', false, false)
      : of(ctx.patchState(({current: newInstance} as Partial<ST>))).pipe(map(() => newInstance));
  }
}
