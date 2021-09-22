import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkEnterpriseFormComponent } from './sk-enterprise-form.component';
import {SharedModule} from '../../../../shared/shared-module';


@NgModule({
  declarations: [
    SkEnterpriseFormComponent
  ],
    imports: [
        CommonModule,
        SharedModule
    ], exports: [
    SkEnterpriseFormComponent,
  ]
})
export class SkEnterpriseFormModule { }
