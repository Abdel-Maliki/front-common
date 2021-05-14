import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuLeftComponent} from './menu-left.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [MenuLeftComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class MenuLeftModule { }
