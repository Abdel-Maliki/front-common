import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Store} from '@ngxs/store';
import {Observable, of} from 'rxjs';
import {SKPageAction} from '../interfaces';
import {SkAbstractEntity} from './sk-abstract-entity';
import {SkAbstractStateModel} from './sk-abstract-state-model';

export abstract class SkAbstractListResolver<T extends SkAbstractEntity<T, ID>,
  S extends SkAbstractStateModel<T>,
  ID extends string | number = any> implements Resolve<T> {
  protected constructor(protected store: Store, protected entitiesSelector: (state: S) => T[], protected pageAction: SKPageAction<T, ID>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<T> {
    const entities = this.store.selectSnapshot(this.entitiesSelector);
    return entities.length === 0 ? this.store.dispatch(this.pageAction) : of(entities);
  }
}
