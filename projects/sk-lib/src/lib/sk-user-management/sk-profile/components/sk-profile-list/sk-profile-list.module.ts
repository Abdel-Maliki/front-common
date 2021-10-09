import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkProfileListComponent } from './sk-profile-list.component';
import {SharedModule} from '../../../../shared/shared-module';
import {SkTableModule} from '../../../../components';



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
