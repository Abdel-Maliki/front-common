import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../../shared/shared-module';
import {SkMenuLeftCategoryComponent} from './sk-menu-left-category.component';
import {SkMenuLeftItemModule} from '../sk-menu-left-item/sk-menu-left-item.module';

@NgModule({
  declarations: [SkMenuLeftCategoryComponent],
  exports: [
    SkMenuLeftCategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    SkMenuLeftItemModule,
  ]
})
export class SkMenuLeftCategoryModule {
}
