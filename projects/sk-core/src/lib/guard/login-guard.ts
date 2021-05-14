import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Store} from '@ngxs/store';
import {SkAuthState} from '../ngxs';


/**
 * @author abdel-maliki
 */

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private store: Store) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const user = this.store.selectSnapshot(SkAuthState.userSelector);

    if (!user) {
      return true;
    }
    this.router.navigate(['']).then();
    return false;
  }
}
