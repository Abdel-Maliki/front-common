import {ISKEntityState} from '../interfaces/entity-state';
import {ResponseWrapper} from '../utils/response-wrapper';
import {Pagination} from '../utils/pagination';
import {Observable} from 'rxjs';
import {StateContext, Store} from '@ngxs/store';
import {ISkService} from '../interfaces/service';
import {ActionType} from '@ngxs/store/src/actions/symbols';
import {catchError, map, tap} from 'rxjs/operators';
import {AbstractEntity} from './abstract-entity';
import {TranslateService} from '@ngx-translate/core';
import {i18nConstantes} from '../constantes/i18n-constantes';
import {HttpHelpers} from '../utils/http-helpers';
import {InvalidPasswordAction} from '../ngxs';

/**
 * @author abdel-maliki
 */

// tslint:disable-next-line:max-line-length
export abstract class AbstractState<T extends AbstractEntity<T>, S extends ISkService<T>, ID extends string | number = any, F = { [key: string]: any }> {

  static readonly INVALID_PASSWORD_MESSAGE = 'Le mot de passe est incorrect';
  private defaultErrorMessage: string | undefined;

  get invalidMessage(): string {
    return AbstractState.INVALID_PASSWORD_MESSAGE;
  }

  protected constructor(protected store: Store, protected service: S, public translate: TranslateService) {
    translate.get(i18nConstantes.errorMessage).toPromise().then(value => this.defaultErrorMessage = value);
  }

  get(ctx: StateContext<ISKEntityState<T>>, action: ActionType & { payload: number }): Observable<T> {
    return this.setState(this.service.get(action.payload), ctx, 'entity');
  }

  getAll(ctx: StateContext<ISKEntityState<T>>, action: ActionType & { payload?: any }): Observable<T[]> {
    return this.setState<T[]>(this.service.getAll(action.payload), ctx, 'all');
  }

  create(ctx: StateContext<ISKEntityState<T>>,
         action: ActionType & { payload: { entity: T, others?: any } }): Observable<T> {
    return this.setState(this.service.create(action.payload.entity, action.payload.others), ctx, 'lastCreate');
  }

  update(ctx: StateContext<ISKEntityState<T>>, action: ActionType & { payload: { entity: T, id: ID, others?: any } })
    : Observable<T> {
    return this.setState(this.service.update(action.payload.entity, action.payload.id, action.payload.others), ctx, 'lastUpdate');
  }

  delete(ctx: StateContext<ISKEntityState<T>>, action: ActionType & { payload: { id: ID, others?: any } }): Observable<T> {
    return this.setState(this.service.delete(action.payload.id, action.payload.others), ctx, 'lastDelete');
  }

  // tslint:disable-next-line:max-line-length
  updateAndGet(ctx: StateContext<ISKEntityState<T>>, action: ActionType & { payload: { entity: T, pagination: Pagination, id: ID, others?: any } })
    : Observable<T[]> {
    return this.setState(this.service.updateAndGet({
      entity: action.payload.entity,
      pagination: action.payload.pagination
    }, action.payload.id, action.payload.others), ctx, 'entities');
  }

  createAndGet(ctx: StateContext<ISKEntityState<T>>,
               action: ActionType & { payload: { entity: T, pagination: Pagination, others?: any } }): Observable<T[]> {
    return this.setState(this.service.createAndGet(
      {entity: action.payload.entity, pagination: action.payload.pagination},
      action.payload.others), ctx, 'entities');
  }

  deleteAndGet(ctx: StateContext<ISKEntityState<T>>,
               action: ActionType & { payload: { pagination: Pagination, id: ID, others?: any } }): Observable<T[]> {
    return this.setState(this.service.deleteAndGet(action.payload.pagination, action.payload.id, action.payload.others), ctx, 'entities');
  }

  pageElements(ctx: StateContext<ISKEntityState<T>>,
               action: ActionType & { payload: { entity: T, pagination: Pagination, others?: any } }): Observable<T[]> {
    return this.setState(this.service.pageElements(action.payload.pagination, action.payload.others), ctx, 'entities');
  }

  deleteAllAndGet(ctx: StateContext<ISKEntityState<T>>,
                  action: ActionType & { payload: { entities: T[], pagination: Pagination, others?: any } })
    : Observable<T[]> {
    if (typeof this.service.deleteAllAndGet === 'undefined') {
      throw new Error('la fonction deleteAllAndGet n\'as pas été implementé');
    }
    return this.setState(this.service.deleteAllAndGet(action.payload.entities, action.payload.pagination, action.payload.others), ctx, 'entities');
  }


  saveAll(ctx: StateContext<ISKEntityState<T>>, action: ActionType & { payload: { entities: T[], others?: any } })
    : Observable<T[]> {
    if (typeof this.service.saveAll === 'undefined') {
      throw new Error('la fonction saveAll n\'as pas été implementé');
    }
    return this.setState(this.service.saveAll(action.payload.entities, action.payload.others), ctx, 'lastCreates');
  }

  updateAll(ctx: StateContext<ISKEntityState<T>>, action: ActionType & { payload: { entities: T[], others?: any } })
    : Observable<T[]> {
    if (typeof this.service.updateAll === 'undefined') {
      throw new Error('la fonction saveAll n\'as pas été implementé');
    }
    return this.setState(this.service.updateAll(action.payload.entities, action.payload.others), ctx, 'lastUpdates');
  }

  deleteAll(ctx: StateContext<ISKEntityState<T>>, action: ActionType & { payload: { entities: T[], others?: any } })
    : Observable<T[]> {
    if (typeof this.service.deleteAll === 'undefined') {
      throw new Error('la fonction deleteAll n\'as pas été implementé');
    }
    const ids: ID[] = action.payload.entities.map(value => value.id);
    return this.setState(this.service.deleteAll(ids, action.payload.others), ctx, 'lastDeletes');
  }

  setBasicState<K>(response: ResponseWrapper<K>, val?: keyof ISKEntityState<T, F>): Partial<ISKEntityState<T, F>> {

    const partial: Partial<ISKEntityState<T, F>> = response.isNotValid ? {
      error: response.error?.full,
      errorMessage: response.error && response.error.message ? response.error.message : this.defaultErrorMessage,
      loader: false,
    } : {loader: false};
    if (val && response.isValid) {
      partial[val] = response.data;
    }

    if (response.isNotValid && response.error?.message === this.invalidMessage) {
      this.store.dispatch(new InvalidPasswordAction());
    }
    return partial;
  }

  setState<K>(observable: Observable<ResponseWrapper<K>>,
              ctx: StateContext<ISKEntityState<T>>,
              val: keyof ISKEntityState<T, F>): Observable<K> {
    return observable
      .pipe(
        map((value: ResponseWrapper<K>) => HttpHelpers.map<K>(value)),
        tap(response => ctx.patchState({...this.setBasicState(response, val)})),
        map(value => value.data as K),
        catchError(err => {
          ctx.patchState({
            error: err,
            loader: false,
          });
          throw new Error(err);
        })
      );
  }

}
