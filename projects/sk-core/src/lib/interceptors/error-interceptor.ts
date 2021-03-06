import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Store} from '@ngxs/store';
import {ResponseWrapper} from '../utils/response-wrapper';
import {SKConfigState} from '../ngxs/config/state';
import {LogoutAction, SetRolesAction, SetUserAction} from '../ngxs/auth/actions';

/**
 * @author abdel-maliki
 */

@Injectable()
export class SkErrorInterceptor implements HttpInterceptor {
  constructor(private store: Store) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.store.selectSnapshot(SKConfigState.useErrorInterceptorSelector)) {
      return next.handle(request);
    }
    return next.handle(request).pipe(catchError((err: HttpErrorResponse) => {
      if ([401].includes(err.status)) {
        this.store.dispatch(new LogoutAction());
      } else if ([403].includes(err.status)) {
        this.store.dispatch(new SetUserAction(err.error.data.user));
        this.store.dispatch(new SetRolesAction(err.error.data.roles));
      }
      return throwError(ResponseWrapper.ko<any>({message: err.error.error.message, full: err}, err.error.code));
    }));
  }
}
