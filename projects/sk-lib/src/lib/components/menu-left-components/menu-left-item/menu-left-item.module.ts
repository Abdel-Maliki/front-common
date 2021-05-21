import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../../shared/shared-module';
import {MenuLeftItemComponent} from './menu-left-item.component';

@NgModule({
  declarations: [MenuLeftItemComponent],
  exports: [
    MenuLeftItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ]
})
export class MenuLeftItemModule {
}
