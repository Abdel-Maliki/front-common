import {SkAbstractStateModel} from '../abstract';
import {ResponseWrapper} from './response-wrapper';
import {Observable} from 'rxjs';
import {StateContext} from '@ngxs/store';
import {ISkService} from '../interfaces';
import {catchError, map, tap} from 'rxjs/operators';
import {SkAbstractEntity} from '../abstract';
import {InvalidPasswordAction} from '../ngxs';
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
  SKUpdateAndGetAction
} from '../interfaces';

/**
 * @author abdel-maliki
 */

export abstract class SkStateHelpers {

  static readonly INVALID_PASSWORD_MESSAGE = 'Le mot de passe est incorrect';

  static setBasicState<K,
    T extends SkAbstractEntity<T, ID>,
    ST extends SkAbstractStateModel<T, F>,
    ID extends string | number = any,
    F = { [key: string]: any }>(
    response: ResponseWrapper<K, F>,
    ctx: StateContext<any>,
    defaultErrorMessage: string,
    val: keyof ST,
    updatePageInf: boolean = false,
    loadEntities: boolean = true): Partial<ST> {

    const partial: Partial<ST> = {};
    partial.loader = false;
    if (response.isNotValid) {
      partial.error = response.error?.full;
      partial.errorMessage = response.error && response.error.message ? response.error.message : defaultErrorMessage;
    }

    if (val && response.data && response.isValid) {
      partial[val] = (response.data as any);
      partial.loadEntities = loadEntities;

      if (updatePageInf) {
        partial.page = response.pagination?.page;
        partial.size = response.pagination?.size;
        partial.sort = response.pagination?.sort;
        partial.filters = response.pagination?.filters;
        partial.direction = response.pagination?.direction;
        partial.globalFilter = response.pagination?.globalFilter;
        partial.totalElements = response.pagination?.totalElements;
      }
    }

    if (response.isNotValid && response.error?.message === SkStateHelpers.INVALID_PASSWORD_MESSAGE) {
      ctx.dispatch(new InvalidPasswordAction());
    }

    return partial;
  }

  static setState<T,
    ST extends SkAbstractStateModel<T>,
    S extends ISkService<T>,
    F = { [key: string]: any },
    ID extends string | number = any,
    RETURN_TYPE extends T | Array<T> = T>(
    observable: Observable<ResponseWrapper<T | Array<T>>>,
    service: S,
    ctx: StateContext<ST>,
    val: keyof SkAbstractStateModel<T, F>,
    updatePageInf: boolean = false,
    loadEntities: boolean = true,
  ): Observable<RETURN_TYPE> {
    return observable
      .pipe(
        map((value: ResponseWrapper<T | Array<T>>) => ResponseWrapper.fromJson(value, service)),
        tap(response => ctx.patchState({...this.setBasicState(response, ctx, '', val, updatePageInf, loadEntities)})),
        map(value => value.data as RETURN_TYPE),
        catchError(err => {
          const partial: Partial<ST> = {};
          partial.error = err;
          partial.loader = false;
          ctx.patchState(partial);
          throw new Error(err);
        })
      );
  }

  /**************************************************************
   ******************************* READ *************************
   **************************************************************/

  static get<T extends SkAbstractEntity<T, ID>,
    ST extends SkAbstractStateModel<T>,
    S extends ISkService<T>,
    ID extends string | number = any, TM = T>(
    service: S,
    ctx: StateContext<ST>,
    action: SKGetAction<ID>,
  ): Observable<T> {
    return SkStateHelpers.setState(service.get(action.payload), service, ctx, 'entity', false, false);
  }

  static getAll<T extends SkAbstractEntity<T, ID>,
    ST extends SkAbstractStateModel<T>,
    S extends ISkService<T>,
    ID extends string | number = any,
    A = any>(
    service: S,
    ctx: StateContext<ST>,
    action: SkGetAllAction<A>,
  ): Observable<T> {
    return SkStateHelpers.setState(service.getAll(action.payload), service, ctx, 'all', false, false);
  }

  static pageElements<T extends SkAbstractEntity<T, ID>,
    ST extends SkAbstractStateModel<T>,
    S extends ISkService<T>,
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
      true, false);
  }


  /**********************************************************
   *************************** WRITE ************************
   **********************************************************/


  static create<T extends SkAbstractEntity<T, ID>,
    ST extends SkAbstractStateModel<T>,
    S extends ISkService<T>,
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
      false,
      true
    );
  }

  static createAndGet<T extends SkAbstractEntity<T, ID>,
    ST extends SkAbstractStateModel<T>,
    S extends ISkService<T>,
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
      true,
      true
    );
  }

  static createAll<T extends SkAbstractEntity<T, ID>,
    ST extends SkAbstractStateModel<T>,
    S extends ISkService<T>,
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
      false,
      true
    );
  }

  /**********************************************************
   *************************** UPDATE ************************
   **********************************************************/

  static update<T extends SkAbstractEntity<T, ID>,
    ST extends SkAbstractStateModel<T>,
    S extends ISkService<T>,
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
      false,
      true
    );
  }

  static updateAndGet<T extends SkAbstractEntity<T, ID>,
    ST extends SkAbstractStateModel<T>,
    S extends ISkService<T>,
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
      true,
      true
    );
  }

  static updateAll<T extends SkAbstractEntity<T, ID>,
    ST extends SkAbstractStateModel<T>,
    S extends ISkService<T>,
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
      false,
      true
    );
  }


  /**********************************************************
   *************************** DELETE ************************
   **********************************************************/

  static delete<T extends SkAbstractEntity<T, ID>,
    ST extends SkAbstractStateModel<T>,
    S extends ISkService<T>,
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
      false,
      true,
    );
  }

  static deleteAndGet<T extends SkAbstractEntity<T, ID>,
    ST extends SkAbstractStateModel<T>,
    S extends ISkService<T>,
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
      true,
      true
    );
  }

  static deleteAllAndGet<T extends SkAbstractEntity<T, ID>,
    ST extends SkAbstractStateModel<T>,
    S extends ISkService<T>,
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
      true,
      true
    );
  }


  static deleteAll<T extends SkAbstractEntity<T, ID>,
    ST extends SkAbstractStateModel<T>,
    S extends ISkService<T>,
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
      false,
      true
    );
  }

}
