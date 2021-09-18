import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SkSidenavContainerComponent} from './sk-sidenav-container.component';
import {SharedModule} from '../../shared/shared-module';
import {SkToolBarModule} from '../sk-tool-bar/sk-tool-bar.module';
import {SkMenuLeftModule} from '../sk-menu-left-components/sk-menu-left/sk-menu-left.module';


@NgModule({
  declarations: [SkSidenavContainerComponent],
    imports: [
        CommonModule,
        SharedModule,
        SkToolBarModule,
        SkMenuLeftModule,
    ],
  exports: [
    SkSidenavContainerComponent,
  ]
})
export class SkSidenavContainerModule {
}
