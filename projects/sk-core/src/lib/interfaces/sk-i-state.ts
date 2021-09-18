import {Observable} from 'rxjs';
import {StateContext} from '@ngxs/store';
import {SkAbstractStateModel} from '../abstract';
import {ActionType} from '@ngxs/store/src/actions/symbols';

/**
 * @author abdel-maliki
 */


export interface ISkState<T> {

  /******* READ *********/

  getAction<ACTION>(ctx: StateContext<SkAbstractStateModel<T>>, action: ActionType & ACTION): Observable<T>;

  getAllAction<ACTION>(ctx: StateContext<SkAbstractStateModel<T>>, action: ActionType & ACTION): Observable<T[]>;

  pageElementsAction<ACTION>(ctx: StateContext<SkAbstractStateModel<T>>, action: ActionType & ACTION): Observable<T[]>;

  /******* WRITE *********/

  createAction<ACTION>(ctx: StateContext<SkAbstractStateModel<T>>, action: ActionType & ACTION): Observable<T>;

  createAndGetAction<ACTION>(ctx: StateContext<SkAbstractStateModel<T>>, action: ActionType & ACTION): Observable<T[]>;

  createAllAction?<ACTION>(ctx: StateContext<SkAbstractStateModel<T>>, action: ActionType & ACTION): Observable<T[]>;

  /******* UPDATE *********/

  updateAction<ACTION>(ctx: StateContext<SkAbstractStateModel<T>>, action: ActionType & ACTION): Observable<T>;

  updateAndGetAction<ACTION>(ctx: StateContext<SkAbstractStateModel<T>>, action: ActionType & ACTION): Observable<T[]>;

  updateAllAction?<ACTION>(ctx: StateContext<SkAbstractStateModel<T>>, action: ActionType & ACTION): Observable<T[]>;


  /******* DELETE *********/

  deleteAction<ACTION>(ctx: StateContext<SkAbstractStateModel<T>>, action: ActionType & ACTION): Observable<T>;

  deleteAndGetAction<ACTION>(ctx: StateContext<SkAbstractStateModel<T>>, action: ActionType & ACTION): Observable<T[]>;

  deleteAllAndGetAction<ACTION>(ctx: StateContext<SkAbstractStateModel<T>>, action: ActionType & ACTION): Observable<T[]>;

  deleteAllAction?<ACTION>(ctx: StateContext<SkAbstractStateModel<T>>, action: ActionType & ACTION): Observable<T[]>;
}
