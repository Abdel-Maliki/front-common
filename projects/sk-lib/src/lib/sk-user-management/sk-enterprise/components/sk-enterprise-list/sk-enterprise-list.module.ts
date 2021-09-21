import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedModule} from '../../../../shared/shared-module';
import {SkEnterpriseListComponent} from './sk-enterprise-list.component';
import {SkTableModule} from '../../../../components';


@NgModule({
  declarations: [
    SkEnterpriseListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SkTableModule
  ], exports: [
    SkEnterpriseListComponent,
  ]
})
export class SkEnterpriseListModule {
}
