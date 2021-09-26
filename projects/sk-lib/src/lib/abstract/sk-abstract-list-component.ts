import {Directive} from '@angular/core';
import {Store} from '@ngxs/store';

@Directive()
// tslint:disable-next-line:directive-class-suffix
export abstract class SkAbstractListComponent {

  protected constructor(protected store: Store) {
  }
}
