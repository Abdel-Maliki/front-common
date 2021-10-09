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
import {SkEnterpriseDomain} from '../classes/sk-enterprise-domain';
import {SkEnterpriseService} from './sk-enterprise.service';
import {Pagination} from '../../../utils/pagination';
import {Observable} from 'rxjs';
import {SkAbstractStateModel, SKDefaultState} from '../../../abstract';
import {SKSelectorHelpers, SkStateHelpers} from '../../../utils';
import {SK_ENTERPRISE_SERVICE} from '../../../classes';

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

export class SkGetEnterpriseAction implements SKGetAction {

  static readonly type = '[SkEnterprise] GetEnterprise';

  constructor(public payload: number | string) {
  }
}


export class SkGetAllEnterpriseAction implements SkGetAllAction {

  static readonly type = '[SkEnterprise] GetAllEnterprises';

  constructor() {
  }
}

export class SKEnterprisePageAction implements SKPageAction<SkEnterpriseDomain> {

  static readonly type = '[SkEnterprise] SKEnterprisePage';

  constructor(public payload: { pagination: Pagination, others?: any }) {
  }
}


/**************************************************************
 *********************** WRITE  ACTIONS ***********************
 **************************************************************/

export class SKCreateEnterpriseAction implements SKCreateAction<SkEnterpriseDomain> {

  static readonly type = '[SkEnterprise] SKCreateEnterprise';

  constructor(public payload: { entity: SkEnterpriseDomain, others?: any }) {
  }
}


export class SKCreateAndGetEnterpriseAction implements SKCreateAndGetAction<SkEnterpriseDomain> {

  static readonly type = '[SkEnterprise] SKCreateAndGetEnterprise';

  constructor(public payload: { entity: SkEnterpriseDomain, pagination: Pagination, others?: any }) {
  }
}


export class SKCreateAllEnterpriseAction implements SKCreateAllAction<SkEnterpriseDomain> {

  static readonly type = '[SkEnterprise] SKCreateAllEnterprise';

  constructor(public payload: { entities: SkEnterpriseDomain[], others?: any }) {
  }
}

/**************************************************************
 *********************** UPDATE  ACTIONS ***********************
 **************************************************************/

export class SKUpdateEnterpriseAction implements SKUpdateAction<SkEnterpriseDomain> {

  static readonly type = '[SkEnterprise] SKUpdateEnterprise';

  constructor(public payload: { entity: SkEnterpriseDomain, id: number | string, others?: any }) {
  }
}


export class SKUpdateAndGetEnterpriseAction implements SKUpdateAndGetAction<SkEnterpriseDomain> {

  static readonly type = '[SkEnterprise] SKUpdateAndGetEnterprise';

  constructor(public payload: { entity: SkEnterpriseDomain, pagination: Pagination, id: number | string, others?: any }) {
  }
}


export class SKUpdateAllEnterpriseAction implements SKUpdateAllAction<SkEnterpriseDomain> {

  static readonly type = '[SkEnterprise] SKUpdateAllEnterprise';

  constructor(public payload: { entities: SkEnterpriseDomain[], others?: any }) {
  }
}

/**************************************************************
 *********************** DELETE  ACTIONS ***********************
 **************************************************************/


export class SKDeleteEnterpriseAction implements SKDeleteAction<SkEnterpriseDomain> {

  static readonly type = '[SkEnterprise] SKDeleteEnterprise';

  constructor(public payload: { entity: SkEnterpriseDomain, id: number | string, others?: any }) {
  }
}


export class SKDeleteAndGetEnterpriseAction implements SKDeleteAndGetAction<SkEnterpriseDomain> {

  static readonly type = '[SkEnterprise] SKDeleteAndGetEnterprise';

  constructor(public payload: { entity: SkEnterpriseDomain, pagination: Pagination, id: number | string, others?: any }) {
  }
}


export class SKDeleteAllEnterpriseAction implements SKDeleteAllAction<SkEnterpriseDomain> {

  static readonly type = '[SkEnterprise] SKDeleteAllEnterprise';

  constructor(public payload: { entities: SkEnterpriseDomain[], others?: any }) {
  }
}

export class SKDeleteAllAndGetEnterpriseAction implements SKDeleteAllAndGetAction<SkEnterpriseDomain> {

  static readonly type = '[SkEnterprise] SKDeleteAllAndGetEnterprise';

  constructor(public payload: { entities: SkEnterpriseDomain[], pagination: Pagination, others?: any }) {
  }
}


/**************************************************************
 *********************** OTHERS  ACTIONS **********************
 **************************************************************/

export class SKSetCurrentForFormEnterpriseAction implements SKSetCurrentForFormAction {

  static readonly type = '[SkEnterprise] SKSetCurrentForFormEnterpriseAction';

  constructor(public payload?: any) {
  }
}

export class SKSetCurrentEnterpriseAction implements SKSetCurrentAction<SkEnterpriseDomain> {

  static readonly type = '[SkEnterprise] SKSetCurrentEnterpriseAction';

  constructor(public payload?: SkEnterpriseDomain) {
  }
}


/**************************************************************
 **************************************************************
 **************************  STATE ****************************
 **************************************************************
 **************************************************************/


export class SKEnterpriseModelStateModel extends SkAbstractStateModel<SkEnterpriseDomain> {
}

export const SK_ENTERPRISE_STATE_TOKEN = new StateToken<SKEnterpriseModelStateModel>('SKEnterpriseModelState');


export const SK_ENTERPRISE_DEFAULT_STATE: SKEnterpriseModelStateModel = SKDefaultState;

@State<SKEnterpriseModelStateModel>({
  name: SK_ENTERPRISE_STATE_TOKEN,
  defaults: SK_ENTERPRISE_DEFAULT_STATE
})
@Injectable()
export class SKEnterpriseModelState implements NgxsOnInit, ISkState<SkEnterpriseDomain, SKEnterpriseModelStateModel> {

  constructor(@Inject(SK_ENTERPRISE_SERVICE) protected service: SkEnterpriseService) {
  }

  /**************************************************************
   **************************************************************
   **************************  SELECTORS **************************
   **************************************************************
   **************************************************************/

  @Selector([SK_ENTERPRISE_STATE_TOKEN])
  static allSelector(state: SKEnterpriseModelStateModel): SkEnterpriseDomain[] {
    return SKSelectorHelpers.allSelector(state);
  }

  @Selector([SK_ENTERPRISE_STATE_TOKEN])
  static entitiesSelector(state: SKEnterpriseModelStateModel): SkEnterpriseDomain[] {
    return SKSelectorHelpers.entitiesSelector(state);

  }

  @Selector([SK_ENTERPRISE_STATE_TOKEN])
  static lastCreatesSelector(state: SKEnterpriseModelStateModel): SkEnterpriseDomain[] {
    return SKSelectorHelpers.lastCreatesSelector(state);
  }

  @Selector([SK_ENTERPRISE_STATE_TOKEN])
  static lastUpdatesSelector(state: SKEnterpriseModelStateModel): SkEnterpriseDomain[] {
    return SKSelectorHelpers.lastUpdatesSelector(state);
  }

  @Selector([SK_ENTERPRISE_STATE_TOKEN])
  static lastDeletesSelector(state: SKEnterpriseModelStateModel): SkEnterpriseDomain[] {
    return SKSelectorHelpers.lastDeletesSelector(state);
  }

  @Selector([SK_ENTERPRISE_STATE_TOKEN])
  static entitySelector(state: SKEnterpriseModelStateModel): SkEnterpriseDomain | undefined {
    return SKSelectorHelpers.entitySelector(state);
  }

  @Selector([SK_ENTERPRISE_STATE_TOKEN])
  static actionsErrorSelector(state: SKEnterpriseModelStateModel): SkIActionsError | undefined {
    return SKSelectorHelpers.actionsErrorSelector(state);
  }

  @Selector([SK_ENTERPRISE_STATE_TOKEN])
  static currentSelector(state: SKEnterpriseModelStateModel): SkEnterpriseDomain | undefined {
    return SKSelectorHelpers.currentSelector(state);
  }

  @Selector([SK_ENTERPRISE_STATE_TOKEN])
  static lastCreateSelector(state: SKEnterpriseModelStateModel): SkEnterpriseDomain | undefined {
    return SKSelectorHelpers.lastCreateSelector(state);
  }

  @Selector([SK_ENTERPRISE_STATE_TOKEN])
  static lastUpdateSelector(state: SKEnterpriseModelStateModel): SkEnterpriseDomain | undefined {
    return SKSelectorHelpers.lastUpdateSelector(state);
  }

  @Selector([SK_ENTERPRISE_STATE_TOKEN])
  static lastDeleteSelector(state: SKEnterpriseModelStateModel): SkEnterpriseDomain | undefined {
    return SKSelectorHelpers.lastDeleteSelector(state);
  }

  @Selector([SK_ENTERPRISE_STATE_TOKEN])
  static paginationSelector(state: SKEnterpriseModelStateModel): SKIPagination | undefined {
    return SKSelectorHelpers.paginationSelector(state);
  }

  @Selector([SK_ENTERPRISE_STATE_TOKEN])
  static loadEntitiesSelector(state: SKEnterpriseModelStateModel): boolean {
    return SKSelectorHelpers.loadEntitiesSelector(state);
  }

  @Selector([SK_ENTERPRISE_STATE_TOKEN])
  static selector(state: SKEnterpriseModelStateModel): SKEnterpriseModelStateModel {
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





  @Action(SkGetEnterpriseAction)
  getAction(ctx: StateContext<SKEnterpriseModelStateModel>, action: SkGetEnterpriseAction): Observable<any> {
    return SkStateHelpers.get(this.service, ctx, action);
  }

  @Action(SkGetAllEnterpriseAction)
  getAllAction(ctx: StateContext<SKEnterpriseModelStateModel>, action: SkGetAllEnterpriseAction): Observable<any> {
    return SkStateHelpers.getAll(this.service, ctx, action);
  }

  @Action(SKEnterprisePageAction)
  pageAction(ctx: StateContext<SKEnterpriseModelStateModel>, action: SKEnterprisePageAction): Observable<any> {
    return SkStateHelpers.pageElements(this.service, ctx, action);
  }


  /**************************************************************
   *********************** WRITE REDUCERS **********************
   **************************************************************/

  @Action(SKCreateEnterpriseAction)
  createAction(ctx: StateContext<SKEnterpriseModelStateModel>, action: SKCreateEnterpriseAction): Observable<any> {
    return SkStateHelpers.create(this.service, ctx, action);
  }

  @Action(SKCreateAndGetEnterpriseAction)
  createAndGetAction(ctx: StateContext<SKEnterpriseModelStateModel>, action: SKCreateAndGetEnterpriseAction): Observable<any> {
    return SkStateHelpers.createAndGet(this.service, ctx, action);
  }


  @Action(SKCreateAllEnterpriseAction)
  createAllAction(ctx: StateContext<SKEnterpriseModelStateModel>, action: SKCreateAllEnterpriseAction): Observable<any> {
    return SkStateHelpers.createAll(this.service, ctx, action);
  }


  /**************************************************************
   *********************** UPDATE  REDUCERS **********************
   **************************************************************/


  @Action(SKUpdateEnterpriseAction)
  updateAction(ctx: StateContext<SKEnterpriseModelStateModel>, action: SKUpdateEnterpriseAction): Observable<any> {
    return SkStateHelpers.update(this.service, ctx, action);
  }

  @Action(SKUpdateAndGetEnterpriseAction)
  updateAndGetAction(ctx: StateContext<SKEnterpriseModelStateModel>, action: SKUpdateAndGetEnterpriseAction): Observable<any> {
    return SkStateHelpers.updateAndGet(this.service, ctx, action);
  }

  @Action(SKUpdateAllEnterpriseAction)
  updateAllAction(ctx: StateContext<SKEnterpriseModelStateModel>, action: SKUpdateAllEnterpriseAction): Observable<any> {
    return SkStateHelpers.updateAll(this.service, ctx, action);
  }


  /**************************************************************
   *********************** DELETE  REDUCERS **********************
   **************************************************************/


  @Action(SKDeleteEnterpriseAction)
  deleteAction(ctx: StateContext<SKEnterpriseModelStateModel>, action: SKDeleteEnterpriseAction): Observable<any> {
    return SkStateHelpers.delete(this.service, ctx, action);
  }

  @Action(SKDeleteAndGetEnterpriseAction)
  deleteAndGetAction(ctx: StateContext<SKEnterpriseModelStateModel>, action: SKDeleteAndGetEnterpriseAction): Observable<any> {
    return SkStateHelpers.deleteAndGet(this.service, ctx, action);
  }

  @Action(SKDeleteAllEnterpriseAction)
  deleteAllAction(ctx: StateContext<SKEnterpriseModelStateModel>, action: SKDeleteAllEnterpriseAction): Observable<any> {
    return SkStateHelpers.deleteAll(this.service, ctx, action);
  }

  @Action(SKDeleteAllAndGetEnterpriseAction)
  deleteAllAndGetAction(ctx: StateContext<SKEnterpriseModelStateModel>, action: SKDeleteAllAndGetEnterpriseAction): Observable<any> {
    return SkStateHelpers.deleteAllAndGet(this.service, ctx, action);
  }


  /**************************************************************
   *********************** OTHERS  REDUCERS **********************
   **************************************************************/

  @Action(SKSetCurrentForFormEnterpriseAction)
  setCurrentForForm(ctx: StateContext<SKEnterpriseModelStateModel>, action: SKSetCurrentForFormEnterpriseAction): Observable<any> {
    return SkStateHelpers.setCurrentForForm(this.service, ctx, action, new SkEnterpriseDomain());
  }

  @Action(SKSetCurrentEnterpriseAction)
  setCurrent(ctx: StateContext<SKEnterpriseModelStateModel>, action: SKSetCurrentEnterpriseAction): Observable<any> {
    return SkStateHelpers.setCurrent(this.service, ctx, action);
  }
}

