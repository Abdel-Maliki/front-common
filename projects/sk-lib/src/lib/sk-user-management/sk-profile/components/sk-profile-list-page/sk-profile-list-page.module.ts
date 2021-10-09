import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkProfileListPageRoutingModule } from './sk-profile-list-page-routing.module';
import { SkProfileListPageComponent } from './sk-profile-list-page.component';
import {SkAddButtonModule, SkListComponentHeaderModule} from '../../../../components';
import {SkProfileListModule} from '../sk-profile-list/sk-profile-list.module';


@NgModule({
  declarations: [
    SkProfileListPageComponent
  ],
  imports: [
    CommonModule,
    SkProfileListPageRoutingModule,
    SkListComponentHeaderModule,
    SkAddButtonModule,
    SkProfileListModule
  ]
})
export class SkProfileListPageModule { }
