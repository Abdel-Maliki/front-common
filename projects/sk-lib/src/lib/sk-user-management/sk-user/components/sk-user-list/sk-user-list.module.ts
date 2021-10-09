import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkUserListComponent } from './sk-user-list.component';
import {SkTableModule} from '../../../../components';
import {SharedModule} from '../../../../shared/shared-module';



@NgModule({
  declarations: [
    SkUserListComponent
  ],
  exports: [
    SkUserListComponent
  ],
  imports: [
    CommonModule,
    SkTableModule,
    SharedModule
  ]
})
export class SkUserListModule { }
