import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SkProfileListPageComponent} from './sk-profile-list-page.component';
import {SkProfileListResolver} from '../../services/sk-profile-list-resolver';

const routes: Routes = [
  {
    path: '',
    component: SkProfileListPageComponent,
    resolve: {data: SkProfileListResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkProfileListPageRoutingModule {
}
