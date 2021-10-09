import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../../shared/shared-module';
import {SkTableModule} from '../../../../components';
import {SkProfileListComponent} from './sk-profile-list.component';



@NgModule({
  declarations: [
    SkProfileListComponent
  ],
  exports: [
    SkProfileListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SkTableModule
  ]
})
export class SkProfileListModule { }
