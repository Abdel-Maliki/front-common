import {SkUserDomain} from '../classes/sk-user-domain';
import {
  SKUserModelState,
  SKUserModelStateModel,
  SKSetCurrentForFormUserAction
} from './sk-user-state';
import {Injectable} from '@angular/core';
import {Store} from '@ngxs/store';
import {SkAbstractFormResolver} from '../../../abstract';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {forkJoin, Observable} from 'rxjs';
import {SkGetAllProfileAction} from '../../sk-profile/services/sk-profile-state';

@Injectable()
export class SkUserFormResolver extends SkAbstractFormResolver<SkUserDomain, SKUserModelStateModel> {
  constructor(protected store: Store) {
    super(store, SKUserModelState.currentSelector, new SKSetCurrentForFormUserAction());
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SkUserDomain> {
    return forkJoin({entity: this.findByIdParam(route), profile: this.loadProfile()});
  }

  loadProfile(): Observable<any> {
    return this.store.dispatch(new SkGetAllProfileAction());
  }

  newInstance(): SkUserDomain {
    return new SkUserDomain();
  }
}
