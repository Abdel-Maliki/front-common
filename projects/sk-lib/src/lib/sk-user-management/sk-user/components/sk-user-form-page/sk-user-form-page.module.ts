import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkUserFormPageRoutingModule } from './sk-user-form-page-routing.module';
import { SkUserFormPageComponent } from './sk-user-form-page.component';


@NgModule({
  declarations: [
    SkUserFormPageComponent
  ],
  imports: [
    CommonModule,
    SkUserFormPageRoutingModule
  ]
})
export class SkUserFormPageModule { }
