import {Observable} from 'rxjs';
import {StateContext} from '@ngxs/store';
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
import {SkIStateModel} from './sk-i-state-model';

/**
 * @author abdel-maliki
 */


export interface ISkState<T extends SKIEntity<T, ID>,
  S extends SkIStateModel<T>,
  ID extends number | string = any,
  F = { [key: string]: any }> {

  /******* READ *********/

  getAction(ctx: StateContext<S>, action: SKGetAction<ID>): Observable<any> | Promise<any> | any;

  getAllAction(ctx: StateContext<S>, action: SkGetAllAction<T>): Observable<any> | Promise<any> | any;

  pageAction(ctx: StateContext<S>, action: SKPageAction<T, ID>): Observable<any> | Promise<any> | any;

  /******* WRITE *********/

  createAction(ctx: StateContext<S>, action: SKCreateAction<T, ID>): Observable<any> | Promise<any> | any;

  createAndGetAction(ctx: StateContext<S>, action: SKCreateAndGetAction<T, ID>)
    : Observable<any> | Promise<any> | any;

  createAllAction?(ctx: StateContext<S>, action: SKCreateAllAction<T, ID>): Observable<any> | Promise<any> | any;

  /******* UPDATE *********/

  updateAction(ctx: StateContext<S>, action: SKUpdateAction<T, ID>): Observable<any> | Promise<any> | any;

  updateAndGetAction(ctx: StateContext<S>, action: SKUpdateAndGetAction<T, ID>)
    : Observable<any> | Promise<any> | any;

  updateAllAction?(ctx: StateContext<S>, action: SKUpdateAllAction<T, ID>): Observable<any> | Promise<any> | any;


  /******* DELETE *********/

  deleteAction(ctx: StateContext<S>, action: SKDeleteAction<T>): Observable<any> | Promise<any> | any;

  deleteAndGetAction(ctx: StateContext<S>, action: SKDeleteAndGetAction<T, ID>)
    : Observable<any> | Promise<any> | any;

  deleteAllAndGetAction(ctx: StateContext<S>, action: SKDeleteAllAndGetAction<T, ID>)
    : Observable<any> | Promise<any> | any;

  deleteAllAction?(ctx: StateContext<S>, action: SKDeleteAllAction<T, ID>): Observable<any> | Promise<any> | any;
}
