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
import {SkProfileDomain} from '../classes/sk-profile-domain';
import {Pagination} from '../../../utils/pagination';
import {Observable} from 'rxjs';
import {SkAbstractStateModel, SKDefaultState} from '../../../abstract';
import {SKSelectorHelpers, SkStateHelpers} from '../../../utils';
import {SK_PROFILE_SERVICE} from '../../../classes';
import {InterfaceProfile} from './interface-profile';

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

export class SkGetProfileAction implements SKGetAction {

  static readonly type = '[SkProfile] GetProfile';

  constructor(public payload: number | string) {
  }
}


export class SkGetAllProfileAction implements SkGetAllAction {

  static readonly type = '[SkProfile] GetAllProfiles';

  constructor() {
  }
}

export class SKProfilePageAction implements SKPageAction<SkProfileDomain> {

  static readonly type = '[SkProfile] SKProfilePage';

  constructor(public payload: { pagination: Pagination, others?: any }) {
  }
}


/**************************************************************
 *********************** WRITE  ACTIONS ***********************
 **************************************************************/

export class SKCreateProfileAction implements SKCreateAction<SkProfileDomain> {

  static readonly type = '[SkProfile] SKCreateProfile';

  constructor(public payload: { entity: SkProfileDomain, others?: any }) {
  }
}


export class SKCreateAndGetProfileAction implements SKCreateAndGetAction<SkProfileDomain> {

  static readonly type = '[SkProfile] SKCreateAndGetProfile';

  constructor(public payload: { entity: SkProfileDomain, pagination: Pagination, others?: any }) {
  }
}


export class SKCreateAllProfileAction implements SKCreateAllAction<SkProfileDomain> {

  static readonly type = '[SkProfile] SKCreateAllProfile';

  constructor(public payload: { entities: SkProfileDomain[], others?: any }) {
  }
}

/**************************************************************
 *********************** UPDATE  ACTIONS ***********************
 **************************************************************/

export class SKUpdateProfileAction implements SKUpdateAction<SkProfileDomain> {

  static readonly type = '[SkProfile] SKUpdateProfile';

  constructor(public payload: { entity: SkProfileDomain, id: number | string, others?: any }) {
  }
}


export class SKUpdateAndGetProfileAction implements SKUpdateAndGetAction<SkProfileDomain> {

  static readonly type = '[SkProfile] SKUpdateAndGetProfile';

  constructor(public payload: { entity: SkProfileDomain, pagination: Pagination, id: number | string, others?: any }) {
  }
}


export class SKUpdateAllProfileAction implements SKUpdateAllAction<SkProfileDomain> {

  static readonly type = '[SkProfile] SKUpdateAllProfile';

  constructor(public payload: { entities: SkProfileDomain[], others?: any }) {
  }
}

/**************************************************************
 *********************** DELETE  ACTIONS ***********************
 **************************************************************/


export class SKDeleteProfileAction implements SKDeleteAction<SkProfileDomain> {

  static readonly type = '[SkProfile] SKDeleteProfile';

  constructor(public payload: { entity: SkProfileDomain, id: number | string, others?: any }) {
  }
}


export class SKDeleteAndGetProfileAction implements SKDeleteAndGetAction<SkProfileDomain> {

  static readonly type = '[SkProfile] SKDeleteAndGetProfile';

  constructor(public payload: { entity: SkProfileDomain, pagination: Pagination, id: number | string, others?: any }) {
  }
}


export class SKDeleteAllProfileAction implements SKDeleteAllAction<SkProfileDomain> {

  static readonly type = '[SkProfile] SKDeleteAllProfile';

  constructor(public payload: { entities: SkProfileDomain[], others?: any }) {
  }
}

export class SKDeleteAllAndGetProfileAction implements SKDeleteAllAndGetAction<SkProfileDomain> {

  static readonly type = '[SkProfile] SKDeleteAllAndGetProfile';

  constructor(public payload: { entities: SkProfileDomain[], pagination: Pagination, others?: any }) {
  }
}


/**************************************************************
 *********************** OTHERS  ACTIONS **********************
 **************************************************************/

export class SKSetCurrentForFormProfileAction implements SKSetCurrentForFormAction {

  static readonly type = '[SkProfile] SKSetCurrentForFormProfileAction';

  constructor(public payload?: any) {
  }
}

export class SKSetCurrentProfileAction implements SKSetCurrentAction<SkProfileDomain> {

  static readonly type = '[SkProfile] SKSetCurrentProfileAction';

  constructor(public payload?: SkProfileDomain) {
  }
}


/**************************************************************
 **************************************************************
 **************************  STATE ****************************
 **************************************************************
 **************************************************************/


export class SKProfileModelStateModel extends SkAbstractStateModel<SkProfileDomain> {
}

export const SK_PROFILE_STATE_TOKEN = new StateToken<SKProfileModelStateModel>('SKProfileModelState');


export const SK_PROFILE_DEFAULT_STATE: SKProfileModelStateModel = SKDefaultState;

@State<SKProfileModelStateModel>({
  name: SK_PROFILE_STATE_TOKEN,
  defaults: SK_PROFILE_DEFAULT_STATE
})
@Injectable()
export class SKProfileModelState implements NgxsOnInit, ISkState<SkProfileDomain, SKProfileModelStateModel> {

  constructor(@Inject(SK_PROFILE_SERVICE) protected service: InterfaceProfile) {
  }

  /**************************************************************
   **************************************************************
   **************************  SELECTORS **************************
   **************************************************************
   **************************************************************/

  @Selector([SK_PROFILE_STATE_TOKEN])
  static allSelector(state: SKProfileModelStateModel): SkProfileDomain[] {
    return SKSelectorHelpers.allSelector(state);
  }

  @Selector([SK_PROFILE_STATE_TOKEN])
  static entitiesSelector(state: SKProfileModelStateModel): SkProfileDomain[] {
    return SKSelectorHelpers.entitiesSelector(state);

  }

  @Selector([SK_PROFILE_STATE_TOKEN])
  static lastCreatesSelector(state: SKProfileModelStateModel): SkProfileDomain[] {
    return SKSelectorHelpers.lastCreatesSelector(state);
  }

  @Selector([SK_PROFILE_STATE_TOKEN])
  static lastUpdatesSelector(state: SKProfileModelStateModel): SkProfileDomain[] {
    return SKSelectorHelpers.lastUpdatesSelector(state);
  }

  @Selector([SK_PROFILE_STATE_TOKEN])
  static lastDeletesSelector(state: SKProfileModelStateModel): SkProfileDomain[] {
    return SKSelectorHelpers.lastDeletesSelector(state);
  }

  @Selector([SK_PROFILE_STATE_TOKEN])
  static entitySelector(state: SKProfileModelStateModel): SkProfileDomain | undefined {
    return SKSelectorHelpers.entitySelector(state);
  }

  @Selector([SK_PROFILE_STATE_TOKEN])
  static actionsErrorSelector(state: SKProfileModelStateModel): SkIActionsError | undefined {
    return SKSelectorHelpers.actionsErrorSelector(state);
  }

  @Selector([SK_PROFILE_STATE_TOKEN])
  static currentSelector(state: SKProfileModelStateModel): SkProfileDomain | undefined {
    return SKSelectorHelpers.currentSelector(state);
  }

  @Selector([SK_PROFILE_STATE_TOKEN])
  static lastCreateSelector(state: SKProfileModelStateModel): SkProfileDomain | undefined {
    return SKSelectorHelpers.lastCreateSelector(state);
  }

  @Selector([SK_PROFILE_STATE_TOKEN])
  static lastUpdateSelector(state: SKProfileModelStateModel): SkProfileDomain | undefined {
    return SKSelectorHelpers.lastUpdateSelector(state);
  }

  @Selector([SK_PROFILE_STATE_TOKEN])
  static lastDeleteSelector(state: SKProfileModelStateModel): SkProfileDomain | undefined {
    return SKSelectorHelpers.lastDeleteSelector(state);
  }

  @Selector([SK_PROFILE_STATE_TOKEN])
  static paginationSelector(state: SKProfileModelStateModel): SKIPagination | undefined {
    return SKSelectorHelpers.paginationSelector(state);
  }

  @Selector([SK_PROFILE_STATE_TOKEN])
  static loadEntitiesSelector(state: SKProfileModelStateModel): boolean {
    return SKSelectorHelpers.loadEntitiesSelector(state);
  }

  @Selector([SK_PROFILE_STATE_TOKEN])
  static selector(state: SKProfileModelStateModel): SKProfileModelStateModel {
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





  @Action(SkGetProfileAction)
  getAction(ctx: StateContext<SKProfileModelStateModel>, action: SkGetProfileAction): Observable<any> {
    return SkStateHelpers.get(this.service, ctx, action);
  }

  @Action(SkGetAllProfileAction)
  getAllAction(ctx: StateContext<SKProfileModelStateModel>, action: SkGetAllProfileAction): Observable<any> {
    return SkStateHelpers.getAll(this.service, ctx, action);
  }

  @Action(SKProfilePageAction)
  pageAction(ctx: StateContext<SKProfileModelStateModel>, action: SKProfilePageAction): Observable<any> {
    return SkStateHelpers.pageElements(this.service, ctx, action);
  }


  /**************************************************************
   *********************** WRITE REDUCERS **********************
   **************************************************************/

  @Action(SKCreateProfileAction)
  createAction(ctx: StateContext<SKProfileModelStateModel>, action: SKCreateProfileAction): Observable<any> {
    return SkStateHelpers.create(this.service, ctx, action);
  }

  @Action(SKCreateAndGetProfileAction)
  createAndGetAction(ctx: StateContext<SKProfileModelStateModel>, action: SKCreateAndGetProfileAction): Observable<any> {
    return SkStateHelpers.createAndGet(this.service, ctx, action);
  }


  @Action(SKCreateAllProfileAction)
  createAllAction(ctx: StateContext<SKProfileModelStateModel>, action: SKCreateAllProfileAction): Observable<any> {
    return SkStateHelpers.createAll(this.service, ctx, action);
  }


  /**************************************************************
   *********************** UPDATE  REDUCERS **********************
   **************************************************************/


  @Action(SKUpdateProfileAction)
  updateAction(ctx: StateContext<SKProfileModelStateModel>, action: SKUpdateProfileAction): Observable<any> {
    return SkStateHelpers.update(this.service, ctx, action);
  }

  @Action(SKUpdateAndGetProfileAction)
  updateAndGetAction(ctx: StateContext<SKProfileModelStateModel>, action: SKUpdateAndGetProfileAction): Observable<any> {
    return SkStateHelpers.updateAndGet(this.service, ctx, action);
  }

  @Action(SKUpdateAllProfileAction)
  updateAllAction(ctx: StateContext<SKProfileModelStateModel>, action: SKUpdateAllProfileAction): Observable<any> {
    return SkStateHelpers.updateAll(this.service, ctx, action);
  }


  /**************************************************************
   *********************** DELETE  REDUCERS **********************
   **************************************************************/


  @Action(SKDeleteProfileAction)
  deleteAction(ctx: StateContext<SKProfileModelStateModel>, action: SKDeleteProfileAction): Observable<any> {
    return SkStateHelpers.delete(this.service, ctx, action);
  }

  @Action(SKDeleteAndGetProfileAction)
  deleteAndGetAction(ctx: StateContext<SKProfileModelStateModel>, action: SKDeleteAndGetProfileAction): Observable<any> {
    return SkStateHelpers.deleteAndGet(this.service, ctx, action);
  }

  @Action(SKDeleteAllProfileAction)
  deleteAllAction(ctx: StateContext<SKProfileModelStateModel>, action: SKDeleteAllProfileAction): Observable<any> {
    return SkStateHelpers.deleteAll(this.service, ctx, action);
  }

  @Action(SKDeleteAllAndGetProfileAction)
  deleteAllAndGetAction(ctx: StateContext<SKProfileModelStateModel>, action: SKDeleteAllAndGetProfileAction): Observable<any> {
    return SkStateHelpers.deleteAllAndGet(this.service, ctx, action);
  }


  /**************************************************************
   *********************** OTHERS  REDUCERS **********************
   **************************************************************/

  @Action(SKSetCurrentForFormProfileAction)
  setCurrentForForm(ctx: StateContext<SKProfileModelStateModel>, action: SKSetCurrentForFormProfileAction): Observable<any> {
    return SkStateHelpers.setCurrentForForm(this.service, ctx, action, new SkProfileDomain());
  }

  @Action(SKSetCurrentProfileAction)
  setCurrent(ctx: StateContext<SKProfileModelStateModel>, action: SKSetCurrentProfileAction): Observable<any> {
    return SkStateHelpers.setCurrent(this.service, ctx, action);
  }
}

