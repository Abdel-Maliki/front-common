import {NgModule} from '@angular/core';
import {KnobModule} from 'primeng/knob';
import {DialogModule} from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';


@NgModule({
  exports: [
    KnobModule,
    DialogModule,
    ToastModule,
  ],
  providers: [
    MessageService,
  ]
})
export class PrimengModules {
}
