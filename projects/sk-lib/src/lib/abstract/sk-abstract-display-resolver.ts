import {Resolve} from '@angular/router';
import {Store} from '@ngxs/store';
import {SKGetAction, SKIEntity, SkIStateModel} from '@sk-framework/sk-core';
import {SkAbstractFindResolver} from './sk-abstract-find-resolver';

export abstract class SkAbstractDisplayResolver<T extends SKIEntity<T, ID>, S extends SkIStateModel<T>,
  ID extends string | number = any> extends SkAbstractFindResolver<T, S, ID> implements Resolve<T> {
  protected constructor(protected store: Store,
                        protected currentSelector: (state: S) => T,
                        protected findAction: SKGetAction<ID>,
                        protected idParam: string = 'id') {
    super(store, currentSelector, findAction, idParam);
  }
}
