import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkEnterpriseFormRoutingModule } from './sk-enterprise-form-routing.module';
import { SkEnterpriseFormComponent } from './sk-enterprise-form.component';
import {SharedModule} from '../../../../shared/shared-module';


@NgModule({
  declarations: [
    SkEnterpriseFormComponent
  ],
    imports: [
        CommonModule,
        SkEnterpriseFormRoutingModule,
        SharedModule
    ], exports: [
    SkEnterpriseFormComponent,
  ]
})
export class SkEnterpriseFormModule { }
