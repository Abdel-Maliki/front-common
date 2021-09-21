import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SkEnterpriseRoutingModule} from './sk-enterprise-routing.module';
import {NgxsModule} from '@ngxs/store';
import {SKEnterpriseModelState} from './sk-enterprise-state';
import {SkEnterpriseService} from './services/sk-enterprise.service';
import {SKEnterpriseListResolver} from './services/sk-enterprise-list-resolver';
import {SkEnterpriseUpdateResolver} from './services/sk-enterprise-update-resolver';
import {SkEnterpriseListPageModule} from './components/sk-enterprise-list-page/sk-enterprise-list-page.module';
import {SkEnterpriseFormPageModule} from './components/sk-enterprise-form-page/sk-enterprise-form-page.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SkEnterpriseRoutingModule,
    NgxsModule.forFeature([SKEnterpriseModelState]),
    SkEnterpriseListPageModule,
    SkEnterpriseFormPageModule,
  ], providers: [
    SkEnterpriseService,
    SKEnterpriseListResolver,
    SkEnterpriseUpdateResolver,
  ],
  exports: []
})
export class SkEnterpriseModule {
}
