import {SkEnterpriseModel} from '../sk-enterprise-model';
import {
  SKEnterpriseModelState,
  SKEnterpriseModelStateModel,
  SKSetCurrentForFormEnterpriseAction
} from '../sk-enterprise-state';
import {Injectable} from '@angular/core';
import {Store} from '@ngxs/store';
import {SkAbstractFormResolver} from '../../../abstract';

@Injectable()
export class SkEnterpriseFormResolver extends SkAbstractFormResolver<SkEnterpriseModel, SKEnterpriseModelStateModel> {
  constructor(protected store: Store) {
    super(store, SKEnterpriseModelState.currentSelector, new SKSetCurrentForFormEnterpriseAction());
  }

  newInstance(): SkEnterpriseModel {
    return new SkEnterpriseModel();
  }
}
