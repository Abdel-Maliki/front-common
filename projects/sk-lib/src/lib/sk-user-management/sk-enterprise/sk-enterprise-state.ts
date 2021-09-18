import {Action, NgxsOnInit, Selector, State, StateContext, StateToken} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {
  SKCreateAction,
  SKCreateAllAction,
  SKCreateAndGetAction, SKDeleteAction, SKDeleteAllAction, SKDeleteAllAndGetAction, SKDeleteAndGetAction,
  SKGetAction,
  SkGetAllAction,
  SKPageAction, SKUpdateAction, SKUpdateAllAction, SKUpdateAndGetAction, SkAbstractStateModel, SKDefaultState,
  SKSelectorHelpers, SkStateHelpers, DEFAULT_PAGINATION
} from 'sk-core';
import {SkEnterpriseModel} from './sk-enterprise-model';
import {SkEnterpriseService} from './services/sk-enterprise.service';
import {Pagination} from '../../utils/pagination';
import {SKIPagination} from 'sk-core';

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

export class SKEnterprisePageAction implements SKPageAction<SkEnterpriseModel> {

  static readonly type = '[SkEnterprise] SKEnterprisePage';

  constructor(public payload: { pagination: Pagination, others?: any }) {
  }
}


/**************************************************************
 *********************** WRITE  ACTIONS ***********************
 **************************************************************/

export class SKCreateEnterpriseAction implements SKCreateAction<SkEnterpriseModel> {

  static readonly type = '[SkEnterprise] SKCreateEnterprise';

  constructor(public payload: { entity: SkEnterpriseModel, others?: any }) {
  }
}


export class SKCreateAndGetEnterpriseAction implements SKCreateAndGetAction<SkEnterpriseModel> {

  static readonly type = '[SkEnterprise] SKCreateAndGetEnterprise';

  constructor(public payload: { entity: SkEnterpriseModel, pagination: Pagination, others?: any }) {
  }
}


export class SKCreateAllEnterpriseAction implements SKCreateAllAction<SkEnterpriseModel> {

  static readonly type = '[SkEnterprise] SKCreateAllEnterprise';

  constructor(public payload: { entities: SkEnterpriseModel[], others?: any }) {
  }
}

/**************************************************************
 *********************** UPDATE  ACTIONS ***********************
 **************************************************************/

export class SKUpdateEnterpriseAction implements SKUpdateAction<SkEnterpriseModel> {

  static readonly type = '[SkEnterprise] SKUpdateEnterprise';

  constructor(public payload: { entity: SkEnterpriseModel, id: number | string, others?: any }) {
  }
}


export class SKUpdateAndGetEnterpriseAction implements SKUpdateAndGetAction<SkEnterpriseModel> {

  static readonly type = '[SkEnterprise] SKUpdateAndGetEnterprise';

  constructor(public payload: { entity: SkEnterpriseModel, pagination: Pagination, id: number | string, others?: any }) {
  }
}


export class SKUpdateAllEnterpriseAction implements SKUpdateAllAction<SkEnterpriseModel> {

  static readonly type = '[SkEnterprise] SKUpdateAllEnterprise';

  constructor(public payload: { entities: SkEnterpriseModel[], others?: any }) {
  }
}

/**************************************************************
 *********************** DELETE  ACTIONS ***********************
 **************************************************************/


export class SKDeleteEnterpriseAction implements SKDeleteAction<SkEnterpriseModel> {

  static readonly type = '[SkEnterprise] SKDeleteEnterprise';

  constructor(public payload: { entity: SkEnterpriseModel, id: number | string, others?: any }) {
  }
}


export class SKDeleteAndGetEnterpriseAction implements SKDeleteAndGetAction<SkEnterpriseModel> {

  static readonly type = '[SkEnterprise] SKDeleteAndGetEnterprise';

  constructor(public payload: { entity: SkEnterpriseModel, pagination: Pagination, id: number | string, others?: any }) {
  }
}


export class SKDeleteAllEnterpriseAction implements SKDeleteAllAction<SkEnterpriseModel> {

  static readonly type = '[SkEnterprise] SKDeleteAllEnterprise';

  constructor(public payload: { entities: SkEnterpriseModel[], others?: any }) {
  }
}

export class SKDeleteAllAndGetEnterpriseAction implements SKDeleteAllAndGetAction<SkEnterpriseModel> {

  static readonly type = '[SkEnterprise] SKDeleteAllAndGetEnterprise';

  constructor(public payload: { entities: SkEnterpriseModel[], pagination: Pagination, others?: any }) {
  }
}


/**************************************************************
 **************************************************************
 **************************  STATE ****************************
 **************************************************************
 **************************************************************/


export class SKEnterpriseModelStateModel extends SkAbstractStateModel<SkEnterpriseModel> {
}

export const SK_ENTERPRISE_STATE_TOKEN = new StateToken<SKEnterpriseModelStateModel>('SKEnterpriseModelState');


export const SK_ENTERPRISE_DEFAULT_STATE: SKEnterpriseModelStateModel = SKDefaultState;

@State<SKEnterpriseModelStateModel>({
  name: SK_ENTERPRISE_STATE_TOKEN,
  defaults: SK_ENTERPRISE_DEFAULT_STATE
})
@Injectable()
export class SKEnterpriseModelState implements NgxsOnInit {

  constructor(private service: SkEnterpriseService) {
  }

  /**************************************************************
   **************************************************************
   **************************  SELECTORS **************************
   **************************************************************
   **************************************************************/

  @Selector([SK_ENTERPRISE_STATE_TOKEN])
  static allSelector(state: SKEnterpriseModelStateModel): SkEnterpriseModel[] {
    return SKSelectorHelpers.allSelector(state);
  }

  @Selector([SK_ENTERPRISE_STATE_TOKEN])
  static entitiesSelector(state: SKEnterpriseModelStateModel): SkEnterpriseModel[] {
    return SKSelectorHelpers.entitiesSelector(state);

  }

  @Selector([SK_ENTERPRISE_STATE_TOKEN])
  static loaderSelector(state: SKEnterpriseModelStateModel): boolean {
    return SKSelectorHelpers.loaderSelector(state);
  }

  @Selector([SK_ENTERPRISE_STATE_TOKEN])
  static pageSelector(state: SKEnterpriseModelStateModel): number {
    return SKSelectorHelpers.pageSelector(state);
  }

  @Selector([SK_ENTERPRISE_STATE_TOKEN])
  static sizeSelector(state: SKEnterpriseModelStateModel): number {
    return SKSelectorHelpers.sizeSelector(state);
  }

  @Selector([SK_ENTERPRISE_STATE_TOKEN])
  static filtersSelector(state: SKEnterpriseModelStateModel): object {
    return SKSelectorHelpers.filtersSelector(state);
  }

  @Selector([SK_ENTERPRISE_STATE_TOKEN])
  static totalElementsSelector(state: SKEnterpriseModelStateModel): number {
    return SKSelectorHelpers.totalElementsSelector(state);
  }

  @Selector([SK_ENTERPRISE_STATE_TOKEN])
  static lastCreatesSelector(state: SKEnterpriseModelStateModel): SkEnterpriseModel[] {
    return SKSelectorHelpers.lastCreatesSelector(state);
  }

  @Selector([SK_ENTERPRISE_STATE_TOKEN])
  static lastUpdatesSelector(state: SKEnterpriseModelStateModel): SkEnterpriseModel[] {
    return SKSelectorHelpers.lastUpdatesSelector(state);
  }

  @Selector([SK_ENTERPRISE_STATE_TOKEN])
  static lastDeletesSelector(state: SKEnterpriseModelStateModel): SkEnterpriseModel[] {
    return SKSelectorHelpers.lastDeletesSelector(state);
  }

  @Selector([SK_ENTERPRISE_STATE_TOKEN])
  static entitySelector(state: SKEnterpriseModelStateModel): SkEnterpriseModel | undefined {
    return SKSelectorHelpers.entitySelector(state);
  }

  @Selector([SK_ENTERPRISE_STATE_TOKEN])
  static errorSelector(state: SKEnterpriseModelStateModel): SkEnterpriseModel | undefined {
    return SKSelectorHelpers.errorSelector(state);
  }

  @Selector([SK_ENTERPRISE_STATE_TOKEN])
  static currentSelector(state: SKEnterpriseModelStateModel): SkEnterpriseModel | undefined {
    return SKSelectorHelpers.currentSelector(state);
  }

  @Selector([SK_ENTERPRISE_STATE_TOKEN])
  static errorMessageSelector(state: SKEnterpriseModelStateModel): string | undefined {
    return SKSelectorHelpers.errorMessageSelector(state);
  }

  @Selector([SK_ENTERPRISE_STATE_TOKEN])
  static sortSelector(state: SKEnterpriseModelStateModel): string | undefined {
    return SKSelectorHelpers.sortSelector(state);
  }

  @Selector([SK_ENTERPRISE_STATE_TOKEN])
  static directionSelector(state: SKEnterpriseModelStateModel): number {
    return SKSelectorHelpers.directionSelector(state);
  }

  @Selector([SK_ENTERPRISE_STATE_TOKEN])
  static globalFilterSelector(state: SKEnterpriseModelStateModel): string | undefined {
    return SKSelectorHelpers.globalFilterSelector(state);
  }

  @Selector([SK_ENTERPRISE_STATE_TOKEN])
  static lastCreateSelector(state: SKEnterpriseModelStateModel): SkEnterpriseModel | undefined {
    return SKSelectorHelpers.lastCreateSelector(state);
  }

  @Selector([SK_ENTERPRISE_STATE_TOKEN])
  static lastUpdateSelector(state: SKEnterpriseModelStateModel): SkEnterpriseModel | undefined {
    return SKSelectorHelpers.lastUpdateSelector(state);
  }

  @Selector([SK_ENTERPRISE_STATE_TOKEN])
  static lastDeleteSelector(state: SKEnterpriseModelStateModel): SkEnterpriseModel | undefined {
    return SKSelectorHelpers.lastDeleteSelector(state);
  }

  @Selector([SK_ENTERPRISE_STATE_TOKEN])
  static paginationSelector(state: SKEnterpriseModelStateModel): SKIPagination {
    return SKSelectorHelpers.paginationSelector(state, DEFAULT_PAGINATION);
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
  async getAction(ctx: StateContext<SKEnterpriseModelStateModel>, action: SkGetEnterpriseAction): Promise<void> {
    SkStateHelpers.get(this.service, ctx, action).subscribe(() => {
    });
  }

  @Action(SkGetAllEnterpriseAction)
  async getAllAction(ctx: StateContext<SKEnterpriseModelStateModel>, action: SkGetAllEnterpriseAction): Promise<void> {
    SkStateHelpers.getAll(this.service, ctx, action).subscribe(() => {
    });
  }

  @Action(SKEnterprisePageAction)
  async pageAction(ctx: StateContext<SKEnterpriseModelStateModel>, action: SKEnterprisePageAction): Promise<void> {
    SkStateHelpers.pageElements(this.service, ctx, action).subscribe(() => {
    });
  }


  /**************************************************************
   *********************** WRITE REDUCERS **********************
   **************************************************************/

  @Action(SKCreateEnterpriseAction)
  async createAction(ctx: StateContext<SKEnterpriseModelStateModel>, action: SKCreateEnterpriseAction): Promise<void> {
    SkStateHelpers.create(this.service, ctx, action).subscribe(() => {
    });
  }

  @Action(SKCreateAndGetEnterpriseAction)
  async createAndGetAction(ctx: StateContext<SKEnterpriseModelStateModel>, action: SKCreateAndGetEnterpriseAction): Promise<void> {
    SkStateHelpers.createAndGet(this.service, ctx, action).subscribe(() => {
    });
  }


  @Action(SKCreateAllEnterpriseAction)
  async createAllAction(ctx: StateContext<SKEnterpriseModelStateModel>, action: SKCreateAllEnterpriseAction): Promise<void> {
    SkStateHelpers.createAll(this.service, ctx, action).subscribe(() => {
    });
  }


  /**************************************************************
   *********************** UPDATE  REDUCERS **********************
   **************************************************************/


  @Action(SKUpdateEnterpriseAction)
  async updateAction(ctx: StateContext<SKEnterpriseModelStateModel>, action: SKUpdateEnterpriseAction): Promise<void> {
    SkStateHelpers.update(this.service, ctx, action).subscribe(() => {
    });
  }

  @Action(SKUpdateAndGetEnterpriseAction)
  async updateAndGetAction(ctx: StateContext<SKEnterpriseModelStateModel>, action: SKUpdateAndGetEnterpriseAction): Promise<void> {
    SkStateHelpers.updateAndGet(this.service, ctx, action).subscribe(() => {
    });
  }

  @Action(SKUpdateAllEnterpriseAction)
  async updateAllAction(ctx: StateContext<SKEnterpriseModelStateModel>, action: SKUpdateAllEnterpriseAction): Promise<void> {
    SkStateHelpers.updateAll(this.service, ctx, action).subscribe(() => {
    });
  }


  /**************************************************************
   *********************** DELETE  REDUCERS **********************
   **************************************************************/


  @Action(SKDeleteEnterpriseAction)
  async deleteAction(ctx: StateContext<SKEnterpriseModelStateModel>, action: SKDeleteEnterpriseAction): Promise<void> {
    SkStateHelpers.delete(this.service, ctx, action).subscribe(() => {
    });
  }

  @Action(SKDeleteAndGetEnterpriseAction)
  async deleteAndGetAction(ctx: StateContext<SKEnterpriseModelStateModel>, action: SKDeleteAndGetEnterpriseAction): Promise<void> {
    SkStateHelpers.deleteAndGet(this.service, ctx, action).subscribe(() => {
    });
  }

  @Action(SKDeleteAllEnterpriseAction)
  async deleteAllAction(ctx: StateContext<SKEnterpriseModelStateModel>, action: SKDeleteAllEnterpriseAction): Promise<void> {
    SkStateHelpers.deleteAll(this.service, ctx, action).subscribe(() => {
    });
  }

  @Action(SKDeleteAllAndGetEnterpriseAction)
  async deleteAllAndGetAction(ctx: StateContext<SKEnterpriseModelStateModel>, action: SKDeleteAllAndGetEnterpriseAction): Promise<void> {
    SkStateHelpers.deleteAllAndGet(this.service, ctx, action).subscribe(() => {
    });
  }
}

