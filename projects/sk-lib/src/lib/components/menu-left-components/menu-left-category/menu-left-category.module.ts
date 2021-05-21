import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../../shared/shared-module';
import {MenuLeftCategoryComponent} from './menu-left-category.component';
import {MenuLeftItemModule} from '../menu-left-item/menu-left-item.module';

@NgModule({
  declarations: [MenuLeftCategoryComponent],
  exports: [
    MenuLeftCategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MenuLeftItemModule,
  ]
})
export class MenuLeftCategoryModule {
}
