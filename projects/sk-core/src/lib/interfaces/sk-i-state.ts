import {Observable} from 'rxjs';
import {StateContext} from '@ngxs/store';
import {SkAbstractStateModel} from '../abstract';
import {
  SKCreateAction,
  SKCreateAllAction,
  SKCreateAndGetAction, SKDeleteAction, SKDeleteAllAction, SKDeleteAllAndGetAction, SKDeleteAndGetAction,
  SKGetAction,
  SkGetAllAction,
  SKPageAction,
  SKUpdateAction, SKUpdateAllAction, SKUpdateAndGetAction
} from './sk-i-actions';
import {SKIEntity} from './sk-i-entity';

/**
 * @author abdel-maliki
 */


export interface ISkState<T extends SKIEntity<T, ID>,
  S extends SkAbstractStateModel<T>,
  ID extends number | string = any,
  F = { [key: string]: any }> {

  /******* READ *********/

  getAction(ctx: StateContext<S>, action: SKGetAction<ID>): Observable<void> | Promise<void> | void;

  getAllAction(ctx: StateContext<S>, action: SkGetAllAction<T>): Observable<void> | Promise<void> | void;

  pageAction(ctx: StateContext<S>, action: SKPageAction<T, ID>): Observable<void> | Promise<void> | void;

  /******* WRITE *********/

  createAction(ctx: StateContext<S>, action: SKCreateAction<T, ID>): Observable<void> | Promise<void> | void;

  createAndGetAction(ctx: StateContext<S>, action: SKCreateAndGetAction<T, ID>)
    : Observable<void> | Promise<void> | void;

  createAllAction?(ctx: StateContext<S>, action: SKCreateAllAction<T, ID>): Observable<void> | Promise<void> | void;

  /******* UPDATE *********/

  updateAction(ctx: StateContext<S>, action: SKUpdateAction<T, ID>): Observable<void> | Promise<void> | void;

  updateAndGetAction(ctx: StateContext<S>, action: SKUpdateAndGetAction<T, ID>)
    : Observable<void> | Promise<void> | void;

  updateAllAction?(ctx: StateContext<S>, action: SKUpdateAllAction<T, ID>): Observable<void> | Promise<void> | void;


  /******* DELETE *********/

  deleteAction(ctx: StateContext<S>, action: SKDeleteAction<T>): Observable<void> | Promise<void> | void;

  deleteAndGetAction(ctx: StateContext<S>, action: SKDeleteAndGetAction<T, ID>)
    : Observable<void> | Promise<void> | void;

  deleteAllAndGetAction(ctx: StateContext<S>, action: SKDeleteAllAndGetAction<T, ID>)
    : Observable<void> | Promise<void> | void;

  deleteAllAction?(ctx: StateContext<S>, action: SKDeleteAllAction<T, ID>): Observable<void> | Promise<void> | void;
}
