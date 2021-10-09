import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SkEnterpriseRoutingModule} from './sk-enterprise-routing.module';
import {NgxsModule} from '@ngxs/store';
import {SKEnterpriseModelState} from './services/sk-enterprise-state';
import {SKEnterpriseListResolver} from './services/sk-enterprise-list-resolver';
import {SkEnterpriseFormResolver} from './services/sk-enterprise-form-resolver.service';
import {SkEnterpriseListPageModule} from './components/sk-enterprise-list-page/sk-enterprise-list-page.module';
import {SkEnterpriseFormPageModule} from './components/sk-enterprise-form-page/sk-enterprise-form-page.module';
import {SkEnterpriseService} from './services/sk-enterprise.service';
import {SK_ENTERPRISE_SERVICE} from '../../classes';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SkEnterpriseRoutingModule,
    NgxsModule.forFeature([SKEnterpriseModelState]),
    SkEnterpriseListPageModule,
    SkEnterpriseFormPageModule,
  ], providers: [
    SKEnterpriseListResolver,
    SkEnterpriseFormResolver,
    {provide: SK_ENTERPRISE_SERVICE, useClass: SkEnterpriseService}
  ],
  exports: []
})
export class SkEnterpriseModule {
}
