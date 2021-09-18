import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {SKPageAction} from '../interfaces';

export abstract class SkAbstractListResolver<T, TM = T, ID extends string | number = any> implements Resolve<T> {
  protected constructor(protected store: Store, protected pageAction: SKPageAction<T, ID>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<T> {
    return this.store.dispatch(this.pageAction);
  }
}
