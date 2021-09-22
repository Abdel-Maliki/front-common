import {StateContext} from '@ngxs/store';

import {
  ISkService,
  ISkState,
  SKCreateAction,
  SKCreateAllAction,
  SKCreateAndGetAction, SKDeleteAction, SKDeleteAllAction, SKDeleteAllAndGetAction, SKDeleteAndGetAction,
  SKGetAction,
  SkGetAllAction, SKIEntity,
  SKPageAction, SKUpdateAction, SKUpdateAllAction, SKUpdateAndGetAction
} from '../interfaces';
import {SkAbstractStateModel} from './sk-abstract-state-model';
import {SkStateHelpers} from '../classes';

/**
 * @author abdel-maliki
 */


export abstract class SKModelState<T extends SKIEntity<T, ID>,
  ST extends SkAbstractStateModel<T, F>,
  S extends ISkService<T>,
  ID extends number | string = any,
  F = { [key: string]: any }> implements ISkState<T, ST, ID, F> {

  protected constructor(private service: S) {
  }


  /**************************************************************
   **************************************************************
   **************************  REDUCERS **************************
   **************************************************************
   **************************************************************/


  /**************************************************************
   *********************** READ  REDUCERS ***********************
   **************************************************************/





  async getAction(ctx: StateContext<ST>, action: SKGetAction<ID>): Promise<void> {
    SkStateHelpers.get(this.service, ctx, action).subscribe(() => {
    });
  }

  async getAllAction(ctx: StateContext<ST>, action: SkGetAllAction): Promise<void> {
    SkStateHelpers.getAll(this.service, ctx, action).subscribe(() => {
    });
  }

  async pageAction(ctx: StateContext<ST>, action: SKPageAction<T, ID>): Promise<void> {
    SkStateHelpers.pageElements(this.service, ctx, action).subscribe(() => {
    });
  }


  /**************************************************************
   *********************** WRITE REDUCERS **********************
   **************************************************************/

  async createAction(ctx: StateContext<ST>, action: SKCreateAction<T, ID>): Promise<void> {
    SkStateHelpers.create(this.service, ctx, action).subscribe(() => {
    });
  }

  async createAndGetAction(ctx: StateContext<ST>, action: SKCreateAndGetAction<T, ID>): Promise<void> {
    SkStateHelpers.createAndGet(this.service, ctx, action).subscribe(() => {
    });
  }

  async createAllAction(ctx: StateContext<ST>, action: SKCreateAllAction<T, ID>): Promise<void> {
    SkStateHelpers.createAll(this.service, ctx, action).subscribe(() => {
    });
  }


  /**************************************************************
   *********************** UPDATE  REDUCERS **********************
   **************************************************************/


  async updateAction(ctx: StateContext<ST>, action: SKUpdateAction<T, ID>): Promise<void> {
    SkStateHelpers.update(this.service, ctx, action).subscribe(() => {
    });
  }

  async updateAndGetAction(ctx: StateContext<ST>, action: SKUpdateAndGetAction<T, ID>): Promise<void> {
    SkStateHelpers.updateAndGet(this.service, ctx, action).subscribe(() => {
    });
  }

  async updateAllAction(ctx: StateContext<ST>, action: SKUpdateAllAction<T, ID>): Promise<void> {
    SkStateHelpers.updateAll(this.service, ctx, action).subscribe(() => {
    });
  }


  /**************************************************************
   *********************** DELETE  REDUCERS **********************
   **************************************************************/


  async deleteAction(ctx: StateContext<ST>, action: SKDeleteAction<T, ID>): Promise<void> {
    SkStateHelpers.delete(this.service, ctx, action).subscribe(() => {
    });
  }

  async deleteAndGetAction(ctx: StateContext<ST>, action: SKDeleteAndGetAction<T, ID>): Promise<void> {
    SkStateHelpers.deleteAndGet(this.service, ctx, action).subscribe(() => {
    });
  }

  async deleteAllAction(ctx: StateContext<ST>, action: SKDeleteAllAction<T, ID>): Promise<void> {
    SkStateHelpers.deleteAll(this.service, ctx, action).subscribe(() => {
    });
  }

  async deleteAllAndGetAction(ctx: StateContext<ST>, action: SKDeleteAllAndGetAction<T, ID>): Promise<void> {
    SkStateHelpers.deleteAllAndGet(this.service, ctx, action).subscribe(() => {
    });
  }
}

