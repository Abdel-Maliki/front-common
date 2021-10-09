import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SkUserListPageComponent} from './sk-user-list-page.component';
import {SkUserListResolver} from '../../services/sk-user-list-resolver';

const routes: Routes = [
  {
    path: '',
    component: SkUserListPageComponent,
    resolve: {data: SkUserListResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkUserListPageRoutingModule {
}
