import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkUserListPageRoutingModule } from './sk-user-list-page-routing.module';
import { SkUserListPageComponent } from './sk-user-list-page.component';


@NgModule({
  declarations: [
    SkUserListPageComponent
  ],
  imports: [
    CommonModule,
    SkUserListPageRoutingModule
  ]
})
export class SkUserListPageModule { }
