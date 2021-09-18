import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SkEnterpriseRoutingModule} from './sk-enterprise-routing.module';
import {NgxsModule} from '@ngxs/store';
import {SKEnterpriseModelState} from './sk-enterprise-state';
import {SkEnterpriseListRoutingModule} from './sk-enterprise-list/sk-enterprise-list-routing.module';
import {SkAddButtonModule, SkListComponentHeaderModule, SkTableModule} from '../../components';
import {SharedModule} from '../../shared/shared-module';
import {SkEnterpriseListComponent} from './sk-enterprise-list/sk-enterprise-list.component';
import {SkEnterpriseService} from './services/sk-enterprise.service';
import {SKEnterpriseListResolver} from './services/sk-enterprise-list-resolver';


@NgModule({
  declarations: [SkEnterpriseListComponent],
  imports: [
    CommonModule,
    SkEnterpriseRoutingModule,
    SkEnterpriseListRoutingModule,
    SkListComponentHeaderModule,
    SharedModule,
    SkAddButtonModule,
    SkTableModule,
    NgxsModule.forFeature([SKEnterpriseModelState]),
  ], providers: [SkEnterpriseService, SKEnterpriseListResolver],
  exports: [SkEnterpriseListComponent]
})
export class SkEnterpriseModule {
}
