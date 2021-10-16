import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkUserFormPageRoutingModule } from './sk-user-form-page-routing.module';
import { SkUserFormPageComponent } from './sk-user-form-page.component';
import {SkUserFormModule} from '../sk-user-form/sk-user-form.module';


@NgModule({
  declarations: [
    SkUserFormPageComponent
  ],
    imports: [
        CommonModule,
        SkUserFormPageRoutingModule,
        SkUserFormModule
    ]
})
export class SkUserFormPageModule { }
