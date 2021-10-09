import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SkUserFormResolver} from '../../services/sk-user-form-resolver.service';
import {SkUserFormPageComponent} from './sk-user-form-page.component';

const routes: Routes = [
  {
    path: 'new',
    component: SkUserFormPageComponent,
    resolve: {data: SkUserFormResolver},
  },
  {
    path: 'update/:id',
    component: SkUserFormPageComponent,
    resolve: {data: SkUserFormResolver},
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkUserFormPageRoutingModule { }
