import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

let routes: Routes;
routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkEnterpriseRoutingModule {
}
