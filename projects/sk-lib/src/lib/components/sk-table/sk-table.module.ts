import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SkTableComponent} from './sk-table.component';
import {MatTableModule} from '@angular/material/table';
import {FlexModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [SkTableComponent],
  exports: [
    SkTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    FlexModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatRippleModule,
    MatPaginatorModule
  ]
})
export class SkTableModule {
}
