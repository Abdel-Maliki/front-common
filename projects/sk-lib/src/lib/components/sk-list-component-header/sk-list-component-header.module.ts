import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SkListComponentHeaderComponent} from './sk-list-component-header.component';
import {SharedModule} from '../../shared/shared-module';


@NgModule({
  declarations: [
    SkListComponentHeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ], exports: [
    SkListComponentHeaderComponent,
  ]
})
export class SkListComponentHeaderModule {
}
