import {Action, NgxsOnInit, Selector, State, StateContext, StateToken} from '@ngxs/store';
import {Inject, Injectable} from '@angular/core';
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
  SKSetCurrentForFormAction,
  SKIPagination,
  ISkState,
  SkIActionsError,
  SKSetCurrentAction
} from 'sk-core';
import {SkUserDomain} from '../classes/sk-user-domain';
import {Pagination} from '../../../utils/pagination';
import {Observable} from 'rxjs';
import {SkAbstractStateModel, SKDefaultState} from '../../../abstract';
import {SKSelectorHelpers, SkStateHelpers} from '../../../utils';
import {SK_USER_SERVICE} from '../../../classes';
import {InterfaceUser} from './interface-user';

/**
 * @author abdel-maliki
 */


/**************************************************************
 **************************************************************
 **************************  ACTIONS **************************
 **************************************************************
 **************************************************************/


/**************************************************************
 *********************** READ  ACTIONS ***********************
 **************************************************************/

export class SkGetUserAction implements SKGetAction {

  static readonly type = '[SkUser] GetUser';

  constructor(public payload: number | string) {
  }
}


export class SkGetAllUserAction implements SkGetAllAction {

  static readonly type = '[SkUser] GetAllUsers';

  constructor() {
  }
}

export class SKUserPageAction implements SKPageAction<SkUserDomain> {

  static readonly type = '[SkUser] SKUserPage';

  constructor(public payload: { pagination: Pagination, others?: any }) {
  }
}


/**************************************************************
 *********************** WRITE  ACTIONS ***********************
 **************************************************************/

export class SKCreateUserAction implements SKCreateAction<SkUserDomain> {

  static readonly type = '[SkUser] SKCreateUser';

  constructor(public payload: { entity: SkUserDomain, others?: any }) {
  }
}


export class SKCreateAndGetUserAction implements SKCreateAndGetAction<SkUserDomain> {

  static readonly type = '[SkUser] SKCreateAndGetUser';

  constructor(public payload: { entity: SkUserDomain, pagination: Pagination, others?: any }) {
  }
}


export class SKCreateAllUserAction implements SKCreateAllAction<SkUserDomain> {

  static readonly type = '[SkUser] SKCreateAllUser';

  constructor(public payload: { entities: SkUserDomain[], others?: any }) {
  }
}

/**************************************************************
 *********************** UPDATE  ACTIONS ***********************
 **************************************************************/

export class SKUpdateUserAction implements SKUpdateAction<SkUserDomain> {

  static readonly type = '[SkUser] SKUpdateUser';

  constructor(public payload: { entity: SkUserDomain, id: number | string, others?: any }) {
  }
}


export class SKUpdateAndGetUserAction implements SKUpdateAndGetAction<SkUserDomain> {

  static readonly type = '[SkUser] SKUpdateAndGetUser';

  constructor(public payload: { entity: SkUserDomain, pagination: Pagination, id: number | string, others?: any }) {
  }
}


export class SKUpdateAllUserAction implements SKUpdateAllAction<SkUserDomain> {

  static readonly type = '[SkUser] SKUpdateAllUser';

  constructor(public payload: { entities: SkUserDomain[], others?: any }) {
  }
}

/**************************************************************
 *********************** DELETE  ACTIONS ***********************
 **************************************************************/


export class SKDeleteUserAction implements SKDeleteAction<SkUserDomain> {

  static readonly type = '[SkUser] SKDeleteUser';

  constructor(public payload: { entity: SkUserDomain, id: number | string, others?: any }) {
  }
}


export class SKDeleteAndGetUserAction implements SKDeleteAndGetAction<SkUserDomain> {

  static readonly type = '[SkUser] SKDeleteAndGetUser';

  constructor(public payload: { entity: SkUserDomain, pagination: Pagination, id: number | string, others?: any }) {
  }
}


export class SKDeleteAllUserAction implements SKDeleteAllAction<SkUserDomain> {

  static readonly type = '[SkUser] SKDeleteAllUser';

  constructor(public payload: { entities: SkUserDomain[], others?: any }) {
  }
}

export class SKDeleteAllAndGetUserAction implements SKDeleteAllAndGetAction<SkUserDomain> {

  static readonly type = '[SkUser] SKDeleteAllAndGetUser';

  constructor(public payload: { entities: SkUserDomain[], pagination: Pagination, others?: any }) {
  }
}


/**************************************************************
 *********************** OTHERS  ACTIONS **********************
 **************************************************************/

export class SKSetCurrentForFormUserAction implements SKSetCurrentForFormAction {

  static readonly type = '[SkUser] SKSetCurrentForFormUserAction';

  constructor(public payload?: any) {
  }
}

export class SKSetCurrentUserAction implements SKSetCurrentAction<SkUserDomain> {

  static readonly type = '[SkUser] SKSetCurrentUserAction';

  constructor(public payload?: SkUserDomain) {
  }
}


/**************************************************************
 **************************************************************
 **************************  STATE ****************************
 **************************************************************
 **************************************************************/


export class SKUserModelStateModel extends SkAbstractStateModel<SkUserDomain> {
}

export const SK_PROFILE_STATE_TOKEN = new StateToken<SKUserModelStateModel>('SKUserModelState');


export const SK_PROFILE_DEFAULT_STATE: SKUserModelStateModel = SKDefaultState;

@State<SKUserModelStateModel>({
  name: SK_PROFILE_STATE_TOKEN,
  defaults: SK_PROFILE_DEFAULT_STATE
})
@Injectable()
export class SKUserModelState implements NgxsOnInit, ISkState<SkUserDomain, SKUserModelStateModel> {

  constructor(@Inject(SK_USER_SERVICE) protected service: InterfaceUser) {
  }

  /**************************************************************
   **************************************************************
   **************************  SELECTORS **************************
   **************************************************************
   **************************************************************/

  @Selector([SK_PROFILE_STATE_TOKEN])
  static allSelector(state: SKUserModelStateModel): SkUserDomain[] {
    return SKSelectorHelpers.allSelector(state);
  }

  @Selector([SK_PROFILE_STATE_TOKEN])
  static entitiesSelector(state: SKUserModelStateModel): SkUserDomain[] {
    return SKSelectorHelpers.entitiesSelector(state);

  }

  @Selector([SK_PROFILE_STATE_TOKEN])
  static lastCreatesSelector(state: SKUserModelStateModel): SkUserDomain[] {
    return SKSelectorHelpers.lastCreatesSelector(state);
  }

  @Selector([SK_PROFILE_STATE_TOKEN])
  static lastUpdatesSelector(state: SKUserModelStateModel): SkUserDomain[] {
    return SKSelectorHelpers.lastUpdatesSelector(state);
  }

  @Selector([SK_PROFILE_STATE_TOKEN])
  static lastDeletesSelector(state: SKUserModelStateModel): SkUserDomain[] {
    return SKSelectorHelpers.lastDeletesSelector(state);
  }

  @Selector([SK_PROFILE_STATE_TOKEN])
  static entitySelector(state: SKUserModelStateModel): SkUserDomain | undefined {
    return SKSelectorHelpers.entitySelector(state);
  }

  @Selector([SK_PROFILE_STATE_TOKEN])
  static actionsErrorSelector(state: SKUserModelStateModel): SkIActionsError | undefined {
    return SKSelectorHelpers.actionsErrorSelector(state);
  }

  @Selector([SK_PROFILE_STATE_TOKEN])
  static currentSelector(state: SKUserModelStateModel): SkUserDomain | undefined {
    return SKSelectorHelpers.currentSelector(state);
  }

  @Selector([SK_PROFILE_STATE_TOKEN])
  static lastCreateSelector(state: SKUserModelStateModel): SkUserDomain | undefined {
    return SKSelectorHelpers.lastCreateSelector(state);
  }

  @Selector([SK_PROFILE_STATE_TOKEN])
  static lastUpdateSelector(state: SKUserModelStateModel): SkUserDomain | undefined {
    return SKSelectorHelpers.lastUpdateSelector(state);
  }

  @Selector([SK_PROFILE_STATE_TOKEN])
  static lastDeleteSelector(state: SKUserModelStateModel): SkUserDomain | undefined {
    return SKSelectorHelpers.lastDeleteSelector(state);
  }

  @Selector([SK_PROFILE_STATE_TOKEN])
  static paginationSelector(state: SKUserModelStateModel): SKIPagination | undefined {
    return SKSelectorHelpers.paginationSelector(state);
  }

  @Selector([SK_PROFILE_STATE_TOKEN])
  static loadEntitiesSelector(state: SKUserModelStateModel): boolean {
    return SKSelectorHelpers.loadEntitiesSelector(state);
  }

  @Selector([SK_PROFILE_STATE_TOKEN])
  static selector(state: SKUserModelStateModel): SKUserModelStateModel {
    return SKSelectorHelpers.selector(state);
  }


  ngxsOnInit(ctx?: StateContext<any>): any {
  }


  /**************************************************************
   **************************************************************
   **************************  REDUCERS **************************
   **************************************************************
   **************************************************************/


  /**************************************************************
   *********************** READ  REDUCERS ***********************
   **************************************************************/





  @Action(SkGetUserAction)
  getAction(ctx: StateContext<SKUserModelStateModel>, action: SkGetUserAction): Observable<any> {
    return SkStateHelpers.get(this.service, ctx, action);
  }

  @Action(SkGetAllUserAction)
  getAllAction(ctx: StateContext<SKUserModelStateModel>, action: SkGetAllUserAction): Observable<any> {
    return SkStateHelpers.getAll(this.service, ctx, action);
  }

  @Action(SKUserPageAction)
  pageAction(ctx: StateContext<SKUserModelStateModel>, action: SKUserPageAction): Observable<any> {
    return SkStateHelpers.pageElements(this.service, ctx, action);
  }


  /**************************************************************
   *********************** WRITE REDUCERS **********************
   **************************************************************/

  @Action(SKCreateUserAction)
  createAction(ctx: StateContext<SKUserModelStateModel>, action: SKCreateUserAction): Observable<any> {
    return SkStateHelpers.create(this.service, ctx, action);
  }

  @Action(SKCreateAndGetUserAction)
  createAndGetAction(ctx: StateContext<SKUserModelStateModel>, action: SKCreateAndGetUserAction): Observable<any> {
    return SkStateHelpers.createAndGet(this.service, ctx, action);
  }


  @Action(SKCreateAllUserAction)
  createAllAction(ctx: StateContext<SKUserModelStateModel>, action: SKCreateAllUserAction): Observable<any> {
    return SkStateHelpers.createAll(this.service, ctx, action);
  }


  /**************************************************************
   *********************** UPDATE  REDUCERS **********************
   **************************************************************/


  @Action(SKUpdateUserAction)
  updateAction(ctx: StateContext<SKUserModelStateModel>, action: SKUpdateUserAction): Observable<any> {
    return SkStateHelpers.update(this.service, ctx, action);
  }

  @Action(SKUpdateAndGetUserAction)
  updateAndGetAction(ctx: StateContext<SKUserModelStateModel>, action: SKUpdateAndGetUserAction): Observable<any> {
    return SkStateHelpers.updateAndGet(this.service, ctx, action);
  }

  @Action(SKUpdateAllUserAction)
  updateAllAction(ctx: StateContext<SKUserModelStateModel>, action: SKUpdateAllUserAction): Observable<any> {
    return SkStateHelpers.updateAll(this.service, ctx, action);
  }


  /**************************************************************
   *********************** DELETE  REDUCERS **********************
   **************************************************************/


  @Action(SKDeleteUserAction)
  deleteAction(ctx: StateContext<SKUserModelStateModel>, action: SKDeleteUserAction): Observable<any> {
    return SkStateHelpers.delete(this.service, ctx, action);
  }

  @Action(SKDeleteAndGetUserAction)
  deleteAndGetAction(ctx: StateContext<SKUserModelStateModel>, action: SKDeleteAndGetUserAction): Observable<any> {
    return SkStateHelpers.deleteAndGet(this.service, ctx, action);
  }

  @Action(SKDeleteAllUserAction)
  deleteAllAction(ctx: StateContext<SKUserModelStateModel>, action: SKDeleteAllUserAction): Observable<any> {
    return SkStateHelpers.deleteAll(this.service, ctx, action);
  }

  @Action(SKDeleteAllAndGetUserAction)
  deleteAllAndGetAction(ctx: StateContext<SKUserModelStateModel>, action: SKDeleteAllAndGetUserAction): Observable<any> {
    return SkStateHelpers.deleteAllAndGet(this.service, ctx, action);
  }


  /**************************************************************
   *********************** OTHERS  REDUCERS **********************
   **************************************************************/

  @Action(SKSetCurrentForFormUserAction)
  setCurrentForForm(ctx: StateContext<SKUserModelStateModel>, action: SKSetCurrentForFormUserAction): Observable<any> {
    return SkStateHelpers.setCurrentForForm(this.service, ctx, action, new SkUserDomain());
  }

  @Action(SKSetCurrentUserAction)
  setCurrent(ctx: StateContext<SKUserModelStateModel>, action: SKSetCurrentUserAction): Observable<any> {
    return SkStateHelpers.setCurrent(this.service, ctx, action);
  }
}

