import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SkEnterpriseListRoutingModule} from './sk-enterprise-list-routing.module';
import {SkEnterpriseListComponent} from './sk-enterprise-list.component';
import {SkListComponentHeaderModule} from '../../../components';
import {SharedModule} from '../../../shared/shared-module';
import {SkAddButtonModule} from '../../../components';


@NgModule({
  declarations: [
    SkEnterpriseListComponent
  ],
    imports: [
        CommonModule,
        SkEnterpriseListRoutingModule,
        SkListComponentHeaderModule,
        SharedModule,
        SkAddButtonModule
    ], exports: [
    SkEnterpriseListComponent,
  ]
})
export class SkEnterpriseListModule {
}
