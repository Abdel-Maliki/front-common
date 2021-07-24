import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkEnterpriseFormRoutingModule } from './sk-enterprise-form-routing.module';
import { SkEnterpriseFormComponent } from './sk-enterprise-form.component';


@NgModule({
  declarations: [
    SkEnterpriseFormComponent
  ],
  imports: [
    CommonModule,
    SkEnterpriseFormRoutingModule
  ], exports: [
    SkEnterpriseFormComponent,
  ]
})
export class SkEnterpriseFormModule { }
