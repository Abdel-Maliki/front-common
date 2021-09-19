import {SkEnterpriseModel} from '../sk-enterprise-model';
import {Store} from '@ngxs/store';
import {SKEnterprisePageAction} from '../sk-enterprise-state';
import {Injectable} from '@angular/core';
import {SkAbstractListResolver, SKConfigState} from 'sk-core';

/**
 * @author abdel-maliki
 */

@Injectable()
export class SKEnterpriseListResolver extends SkAbstractListResolver<SkEnterpriseModel> {
  constructor(protected store: Store) {
    super(store, new SKEnterprisePageAction({
      pagination: store.selectSnapshot(SKConfigState.paginationSelector)
    }));
  }
}