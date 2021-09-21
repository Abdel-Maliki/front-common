import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SKEnterpriseListResolver} from '../../services/sk-enterprise-list-resolver';
import {SkEnterpriseListPageComponent} from './sk-enterprise-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: SkEnterpriseListPageComponent,
    resolve: {data: SKEnterpriseListResolver}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkEnterpriseListPageRoutingModule {
}
