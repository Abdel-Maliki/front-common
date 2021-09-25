import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SkEnterpriseFormPageComponent} from './sk-enterprise-form-page.component';
import {SkEnterpriseFormResolver} from '../../services/sk-enterprise-form-resolver.service';

const routes: Routes = [
  {
    path: 'new',
    component: SkEnterpriseFormPageComponent,
    resolve: {data: SkEnterpriseFormResolver},
  },
  {
    path: 'update/:id',
    component: SkEnterpriseFormPageComponent,
    resolve: {data: SkEnterpriseFormResolver},
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkEnterpriseFormPageRoutingModule {
}
