import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuLeftComponent} from './menu-left.component';
import {RouterModule} from '@angular/router';
import {MenuLeftCategoryModule} from '../menu-left-category/menu-left-category.module';
import {SharedModule} from '../../../shared/shared-module';



@NgModule({
  declarations: [MenuLeftComponent],
  exports: [
    MenuLeftComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MenuLeftCategoryModule,
    SharedModule
  ]
})
export class MenuLeftModule { }
