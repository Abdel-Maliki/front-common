import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkEnterpriseFormPageRoutingModule } from './sk-enterprise-form-page-routing.module';
import { SkEnterpriseFormPageComponent } from './sk-enterprise-form-page.component';


@NgModule({
  declarations: [
    SkEnterpriseFormPageComponent
  ],
  imports: [
    CommonModule,
    SkEnterpriseFormPageRoutingModule
  ]
})
export class SkEnterpriseFormPageModule { }
