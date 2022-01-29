import {Directive} from '@angular/core';
import {SKIEntity, SkIStateModel} from '@sk-framework/sk-core';
import {SkComponentsData} from '../services';
import {ActivatedRoute, Router} from '@angular/router';
import {SkAbstractComponent} from './sk-abstract-component';

@Directive()
// tslint:disable-next-line:directive-class-suffix
export abstract class SkAbstractFormComponent<T extends SKIEntity<T, ID>,
  S extends SkIStateModel<T>,
  ID extends string | number = any,
  F = any> extends SkAbstractComponent<T, S, ID, F> {

  protected constructor(protected data: SkComponentsData,
                        protected router: Router,
                        protected activatedRoute: ActivatedRoute) {
    super(data, router, activatedRoute);
  }
}
