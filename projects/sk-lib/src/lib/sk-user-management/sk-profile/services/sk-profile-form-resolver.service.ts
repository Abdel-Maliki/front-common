import {SkProfileDomain} from '../classes/sk-profile-domain';
import {
  SKProfileModelState,
  SKProfileModelStateModel,
  SKSetCurrentForFormProfileAction
} from './sk-profile-state';
import {Injectable} from '@angular/core';
import {Store} from '@ngxs/store';
import {SkAbstractFormResolver} from '../../../abstract';

@Injectable()
export class SkProfileFormResolver extends SkAbstractFormResolver<SkProfileDomain, SKProfileModelStateModel> {
  constructor(protected store: Store) {
    super(store, SKProfileModelState.currentSelector, new SKSetCurrentForFormProfileAction());
  }

  newInstance(): SkProfileDomain {
    return new SkProfileDomain();
  }
}
