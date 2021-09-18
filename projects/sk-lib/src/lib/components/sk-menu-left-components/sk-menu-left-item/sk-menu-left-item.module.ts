import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../../shared/shared-module';
import {SkMenuLeftItemComponent} from './sk-menu-left-item.component';

@NgModule({
  declarations: [SkMenuLeftItemComponent],
  exports: [
    SkMenuLeftItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ]
})
export class SkMenuLeftItemModule {
}
