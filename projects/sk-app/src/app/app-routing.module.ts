import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'users-management/enterprises',
    loadChildren: () => import('../../../sk-lib/src/lib/sk-user-management').then(m => m.SkEnterpriseModule),
  },
  {
    path: 'users-management/profiles',
    loadChildren: () => import('../../../sk-lib/src/lib/sk-user-management').then(m => m.SkProfileModule),
  },
  {
    path: 'users-management/users',
    loadChildren: () => import('../../../sk-lib/src/lib/sk-user-management').then(m => m.SkUserModule),
  },
  {
    path: '',
    redirectTo: 'users-management/enterprises'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
