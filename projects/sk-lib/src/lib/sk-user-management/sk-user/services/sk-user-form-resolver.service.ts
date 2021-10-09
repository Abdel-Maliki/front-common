import {SkUserDomain} from '../classes/sk-user-domain';
import {
  SKUserModelState,
  SKUserModelStateModel,
  SKSetCurrentForFormUserAction
} from './sk-user-state';
import {Injectable} from '@angular/core';
import {Store} from '@ngxs/store';
import {SkAbstractFormResolver} from '../../../abstract';

@Injectable()
export class SkUserFormResolver extends SkAbstractFormResolver<SkUserDomain, SKUserModelStateModel> {
  constructor(protected store: Store) {
    super(store, SKUserModelState.currentSelector, new SKSetCurrentForFormUserAction());
  }

  newInstance(): SkUserDomain {
    return new SkUserDomain();
  }
}
