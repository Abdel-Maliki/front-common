import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Store} from '@ngxs/store';
import {Observable, of} from 'rxjs';
import {SKIEntity, SKPageAction, SkIStateModel} from '@sk-framework/sk-core';

export abstract class SkAbstractListResolver<T extends SKIEntity<T, ID>, S extends SkIStateModel<T>,
  ID extends string | number = any> implements Resolve<T> {
  protected constructor(protected store: Store,
                        protected loadEntitiesSelector: (state: S) => boolean,
                        protected pageAction: SKPageAction<T, ID>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<T> {
    const loadEntities = this.store.selectSnapshot(this.loadEntitiesSelector);
    return loadEntities ? this.store.dispatch(this.pageAction) : of(loadEntities);
  }
}
