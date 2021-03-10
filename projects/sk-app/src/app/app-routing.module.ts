import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RouterTestComponent} from './router-test/router-test.component';

const routes: Routes = [
  {path: 'test', component: RouterTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
