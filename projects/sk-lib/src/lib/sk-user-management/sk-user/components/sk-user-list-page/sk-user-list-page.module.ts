import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkUserListPageRoutingModule } from './sk-user-list-page-routing.module';
import { SkUserListPageComponent } from './sk-user-list-page.component';
import {SkUserListModule} from '../sk-user-list/sk-user-list.module';
import {SkAddButtonModule, SkListComponentHeaderModule} from '../../../../components';


@NgModule({
  declarations: [
    SkUserListPageComponent
  ],
  imports: [
    CommonModule,
    SkUserListPageRoutingModule,
    SkUserListModule,
    SkListComponentHeaderModule,
    SkAddButtonModule
  ]
})
export class SkUserListPageModule { }
