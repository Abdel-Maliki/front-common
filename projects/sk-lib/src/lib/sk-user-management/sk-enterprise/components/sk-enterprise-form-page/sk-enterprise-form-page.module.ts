import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkEnterpriseFormPageRoutingModule } from './sk-enterprise-form-page-routing.module';
import { SkEnterpriseFormPageComponent } from './sk-enterprise-form-page.component';
import {SkEnterpriseFormModule} from '../sk-enterprise-form/sk-enterprise-form.module';


@NgModule({
  declarations: [
    SkEnterpriseFormPageComponent
  ],
    imports: [
        CommonModule,
        SkEnterpriseFormPageRoutingModule,
        SkEnterpriseFormModule
    ]
})
export class SkEnterpriseFormPageModule { }
