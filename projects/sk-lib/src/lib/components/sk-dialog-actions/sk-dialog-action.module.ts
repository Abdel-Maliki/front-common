import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SkDialogActionsComponent} from './sk-dialog-actions.component';
import {SharedModule} from '../../shared/shared-module';


@NgModule({
  declarations: [SkDialogActionsComponent],
  exports: [SkDialogActionsComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SkDialogActionModule {
}
