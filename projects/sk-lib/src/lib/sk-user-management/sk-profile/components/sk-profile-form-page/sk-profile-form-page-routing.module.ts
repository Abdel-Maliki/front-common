import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SkProfileFormPageComponent} from './sk-profile-form-page.component';
import {SkProfileFormResolver} from '../../services/sk-profile-form-resolver.service';

const routes: Routes = [
  {
    path: 'new',
    component: SkProfileFormPageComponent,
    resolve: {data: SkProfileFormResolver},
  },
  {
    path: 'update/:id',
    component: SkProfileFormPageComponent,
    resolve: {data: SkProfileFormResolver},
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkProfileFormPageRoutingModule { }
