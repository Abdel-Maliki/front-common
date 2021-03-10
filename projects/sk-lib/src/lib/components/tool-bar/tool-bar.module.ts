import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolBarComponent} from './tool-bar.component';
import {SharedModule} from '../../shared/shared-module';


@NgModule({
  declarations: [ToolBarComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [ToolBarComponent]
})
export class ToolBarModule {
}
