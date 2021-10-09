import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkProfileFormPageRoutingModule } from './sk-profile-form-page-routing.module';
import { SkProfileFormPageComponent } from './sk-profile-form-page.component';
import {SkProfileFormModule} from '../sk-profile-form/sk-profile-form.module';


@NgModule({
  declarations: [
    SkProfileFormPageComponent
  ],
  imports: [
    CommonModule,
    SkProfileFormPageRoutingModule,
    SkProfileFormModule
  ]
})
export class SkProfileFormPageModule { }
