import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Store} from '@ngxs/store';
import {Observable, of} from 'rxjs';
import {SKGetAction, SKIEntity, SkIStateModel} from 'sk-core';

export abstract class SkAbstractFindResolver<T extends SKIEntity<T, ID>, S extends SkIStateModel<T>,
  ID extends string | number = any> implements Resolve<T> {
  protected constructor(protected store: Store,
                        protected currentSelector: (state: S) => T | undefined,
                        protected findAction: SKGetAction<ID>,
                        protected idParam: string = 'id') {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<T> {
    const current = this.store.selectSnapshot(this.currentSelector);
    this.findAction.payload = route.params[this.idParam];
    return current && current.id && current.id === route.params[this.idParam] ? of(current) : this.store.dispatch(this.findAction);
  }
}
