import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SkMenuLeftComponent} from './sk-menu-left.component';
import {RouterModule} from '@angular/router';
import {SkMenuLeftCategoryModule} from '../sk-menu-left-category/sk-menu-left-category.module';
import {SharedModule} from '../../../shared/shared-module';



@NgModule({
  declarations: [SkMenuLeftComponent],
  exports: [
    SkMenuLeftComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SkMenuLeftCategoryModule,
    SharedModule
  ]
})
export class SkMenuLeftModule { }
