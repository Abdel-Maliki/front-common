import {Directive} from '@angular/core';
import {SkComponentsData} from '../services/sk-components-data';

@Directive()
// tslint:disable-next-line:directive-class-suffix
export abstract class SkAbstractListComponent {

  protected constructor(protected data: SkComponentsData) {
  }
}
