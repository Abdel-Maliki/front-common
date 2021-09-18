import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SkToolBarComponent} from './sk-tool-bar.component';
import {SharedModule} from '../../shared/shared-module';


@NgModule({
  declarations: [SkToolBarComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [SkToolBarComponent]
})
export class SkToolBarModule {
}
