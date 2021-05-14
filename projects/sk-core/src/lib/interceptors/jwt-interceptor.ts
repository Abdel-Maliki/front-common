import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Store} from '@ngxs/store';
import {SkAuthState} from '../ngxs/auth/state';
import {SKConfigState} from '../ngxs/config/state';

/**
 * @author abdel-maliki
 * Date : 06/10/2020
 */

@Injectable()
export class SkJwtInterceptor implements HttpInterceptor {
  constructor(private store: Store) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.store.selectSnapshot(SKConfigState.useJwtInterceptorSelector)) {
      return next.handle(request);
    }
    const token: string = this.store.selectSnapshot<string>(SkAuthState.tokenSelector);
    const isApiUrl = request.url.startsWith(this.store.selectSnapshot(SKConfigState.backendUrlSelector));
    if (token && token.trim().length > 0 && isApiUrl) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request);
  }
}
