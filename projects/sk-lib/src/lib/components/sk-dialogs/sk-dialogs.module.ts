import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SkDialogComponent} from './sk-dialog.component';
import {SkDialogActionModule} from '../sk-dialog-actions/sk-dialog-action.module';
import {SharedModule} from '../../shared/shared-module';


@NgModule({
  declarations: [SkDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    SkDialogActionModule,
  ]
})
export class SkDialogsModule {
}
