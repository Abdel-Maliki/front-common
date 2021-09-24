import {SkEnterpriseModel} from '../sk-enterprise-model';
import {Store} from '@ngxs/store';
import {SKEnterpriseModelState, SKEnterpriseModelStateModel, SKEnterprisePageAction} from '../sk-enterprise-state';
import {Injectable} from '@angular/core';
import {SKConfigState} from 'sk-core';
import {SkAbstractListResolver} from '../../../abstract';

/**
 * @author abdel-maliki
 */

@Injectable()
export class SKEnterpriseListResolver extends SkAbstractListResolver<SkEnterpriseModel, SKEnterpriseModelStateModel> {
  constructor(protected store: Store) {
    super(store, SKEnterpriseModelState.loadEntitiesSelector, new SKEnterprisePageAction({
      pagination: store.selectSnapshot(SKConfigState.paginationSelector)
    }));
  }
}
