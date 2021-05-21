import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidenavContainerComponent} from './sidenav-container.component';
import {SharedModule} from '../../shared/shared-module';
import {ToolBarModule} from '../tool-bar/tool-bar.module';
import {MenuLeftModule} from '../menu-left-components/menu-left/menu-left.module';


@NgModule({
  declarations: [SidenavContainerComponent],
    imports: [
        CommonModule,
        SharedModule,
        ToolBarModule,
        MenuLeftModule,
    ],
  exports: [
    SidenavContainerComponent,
  ]
})
export class SidenavContainerModule {
}
