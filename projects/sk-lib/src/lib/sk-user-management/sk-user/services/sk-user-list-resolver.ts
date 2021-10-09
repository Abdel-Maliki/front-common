import {SkUserDomain} from '../classes/sk-user-domain';
import {Store} from '@ngxs/store';
import {SKUserModelState, SKUserModelStateModel, SKUserPageAction} from './sk-user-state';
import {Injectable} from '@angular/core';
import {SKConfigState} from 'sk-core';
import {SkAbstractListResolver} from '../../../abstract';

/**
 * @author abdel-maliki
 */

@Injectable()
export class SkUserListResolver extends SkAbstractListResolver<SkUserDomain, SKUserModelStateModel> {
  constructor(protected store: Store) {
    super(store, SKUserModelState.loadEntitiesSelector, new SKUserPageAction({
      pagination: store.selectSnapshot(SKConfigState.paginationSelector)
    }));
  }
}
