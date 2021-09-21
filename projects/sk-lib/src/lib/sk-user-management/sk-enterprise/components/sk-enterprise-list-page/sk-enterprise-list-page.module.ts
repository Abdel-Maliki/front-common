import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SkEnterpriseListPageRoutingModule} from './sk-enterprise-list-page-routing.module';
import {SkEnterpriseListPageComponent} from './sk-enterprise-list-page.component';
import {SharedModule} from '../../../../shared/shared-module';
import {SkAddButtonModule, SkListComponentHeaderModule} from '../../../../components';
import {SkEnterpriseListModule} from '../sk-enterprise-list/sk-enterprise-list.module';


@NgModule({
  declarations: [
    SkEnterpriseListPageComponent
  ],
  imports: [
    CommonModule,
    SkEnterpriseListPageRoutingModule,
    SharedModule,
    SkListComponentHeaderModule,
    SkAddButtonModule,
    SkEnterpriseListModule
  ], exports: [
    SkEnterpriseListPageComponent
  ]
})
export class SkEnterpriseListPageModule {
}
