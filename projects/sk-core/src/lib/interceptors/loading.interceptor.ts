import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {Store} from '@ngxs/store';
import {DecLoadingRequestAction, IncLoadingRequestAction} from '../ngxs/loading/actions';

/**
 * @author abdel-maliki
 */
@Injectable()
export class SkLoadingInterceptor implements HttpInterceptor {

  constructor(private store: Store) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.store.dispatch(new IncLoadingRequestAction());
    return next.handle(request).pipe(
      finalize(() => {
        this.store.dispatch(new DecLoadingRequestAction());
      })
    );
  }
}
