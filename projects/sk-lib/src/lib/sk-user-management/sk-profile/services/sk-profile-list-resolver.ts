import {SkProfileDomain} from '../classes/sk-profile-domain';
import {Store} from '@ngxs/store';
import {SKProfileModelState, SKProfileModelStateModel, SKProfilePageAction} from './sk-profile-state';
import {Injectable} from '@angular/core';
import {SKConfigState} from 'sk-core';
import {SkAbstractListResolver} from '../../../abstract';

/**
 * @author abdel-maliki
 */

@Injectable()
export class SkProfileListResolver extends SkAbstractListResolver<SkProfileDomain, SKProfileModelStateModel> {
  constructor(protected store: Store) {
    super(store, SKProfileModelState.loadEntitiesSelector, new SKProfilePageAction({
      pagination: store.selectSnapshot(SKConfigState.paginationSelector)
    }));
  }
}
