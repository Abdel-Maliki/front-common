import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidenavContainerComponent} from './sidenav-container.component';
import {SharedModule} from '../../shared/shared-module';
import {ToolBarModule} from '../tool-bar/tool-bar.module';


@NgModule({
  declarations: [SidenavContainerComponent],
  imports: [
    CommonModule,
    SharedModule,
    ToolBarModule,
  ],
  exports: [
    SidenavContainerComponent,
  ]
})
export class SidenavContainerModule {
}
