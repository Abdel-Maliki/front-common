import {Resolve} from '@angular/router';
import {Store} from '@ngxs/store';
import {SKGetAction, SKIEntity} from '../interfaces';
import {SkAbstractStateModel} from './sk-abstract-state-model';
import {SkAbstractFindResolver} from './sk-abstract-find-resolver';

export abstract class SkAbstractUpdateResolver<T extends SKIEntity<T, ID>,
  S extends SkAbstractStateModel<T>,
  ID extends string | number = any> extends SkAbstractFindResolver<T, S, ID> implements Resolve<T> {
  protected constructor(protected store: Store,
                        protected currentSelector: (state: S) => T | undefined,
                        protected findAction: SKGetAction<ID>,
                        protected idParam: string = 'id') {
    super(store, currentSelector, findAction, idParam);
  }
}
