import {SkEnterpriseModel} from '../sk-enterprise-model';
import {SKEnterpriseModelState, SKEnterpriseModelStateModel, SkGetEnterpriseAction} from '../sk-enterprise-state';
import {Injectable} from '@angular/core';
import {Store} from '@ngxs/store';
import {SkAbstractUpdateResolver} from '../../../abstract';

@Injectable()
export class SkEnterpriseUpdateResolver extends SkAbstractUpdateResolver<SkEnterpriseModel, SKEnterpriseModelStateModel> {
  constructor(protected store: Store) {
    super(store, SKEnterpriseModelState.currentSelector, new SkGetEnterpriseAction(0));
  }
}
