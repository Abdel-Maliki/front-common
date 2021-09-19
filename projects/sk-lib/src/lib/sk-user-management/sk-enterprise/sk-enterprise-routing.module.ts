import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SkEnterpriseListComponent} from './sk-enterprise-list/sk-enterprise-list.component';
import {SKEnterpriseListResolver} from './services/sk-enterprise-list-resolver';
import {SkEnterpriseFormComponent} from './sk-enterprise-form/sk-enterprise-form.component';

const routes: Routes = [
  {
    path: '',
    component: SkEnterpriseListComponent,
    resolve: {data: SKEnterpriseListResolver}
  },
  {
    path: 'new',
    component: SkEnterpriseFormComponent,
  },
  {
    path: 'update/:id',
    component: SkEnterpriseFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkEnterpriseRoutingModule {
}
