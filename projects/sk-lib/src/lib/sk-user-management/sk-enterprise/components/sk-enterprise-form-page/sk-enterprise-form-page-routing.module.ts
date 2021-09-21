import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SkEnterpriseFormPageComponent} from './sk-enterprise-form-page.component';
import {SkEnterpriseUpdateResolver} from '../../services/sk-enterprise-update-resolver';

const routes: Routes = [
  {
    path: 'new',
    component: SkEnterpriseFormPageComponent,
  },
  {
    path: 'update/:id',
    component: SkEnterpriseFormPageComponent,
    resolve: {data: SkEnterpriseUpdateResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkEnterpriseFormPageRoutingModule {
}
