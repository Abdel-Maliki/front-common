import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, UrlSegment, Route} from '@angular/router';
import {Observable} from 'rxjs';
import {Store} from '@ngxs/store';
import {SkAuthState} from '../ngxs';


/**
 * @author abdel-maliki
 */

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private router: Router, private store: Store) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.hasAuthenticated(state);
  }

  private hasAuthenticated(state: RouterStateSnapshot): boolean {
    const user = this.store.selectSnapshot(SkAuthState.userSelector);
    if (user) {
      return true;
    }
    this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}}).then();
    return false;
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}
