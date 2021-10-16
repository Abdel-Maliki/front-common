import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkUserFormComponent } from './sk-user-form.component';
import {SharedModule} from '../../../../shared/shared-module';



@NgModule({
    declarations: [
        SkUserFormComponent
    ],
    exports: [
        SkUserFormComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class SkUserFormModule { }
