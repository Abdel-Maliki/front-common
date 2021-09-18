import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SkEnterpriseListComponent} from './sk-enterprise-list/sk-enterprise-list.component';
import {SKEnterpriseListResolver} from './services/sk-enterprise-list-resolver';

const routes: Routes = [
  {
    path: '',
    component: SkEnterpriseListComponent,
    resolve: {data: SKEnterpriseListResolver}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkEnterpriseRoutingModule {
}
