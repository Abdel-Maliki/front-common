import {SkEnterpriseDomain} from '../classes/sk-enterprise-domain';
import {
  SKEnterpriseModelState,
  SKEnterpriseModelStateModel,
  SKSetCurrentForFormEnterpriseAction
} from './sk-enterprise-state';
import {Injectable} from '@angular/core';
import {Store} from '@ngxs/store';
import {SkAbstractFormResolver} from '../../../abstract';

@Injectable()
export class SkEnterpriseFormResolver extends SkAbstractFormResolver<SkEnterpriseDomain, SKEnterpriseModelStateModel> {
  constructor(protected store: Store) {
    super(store, SKEnterpriseModelState.currentSelector, new SKSetCurrentForFormEnterpriseAction());
  }

  newInstance(): SkEnterpriseDomain {
    return new SkEnterpriseDomain();
  }
}
