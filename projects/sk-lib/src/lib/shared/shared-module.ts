import {NgModule} from '@angular/core';
import {MaterialModules} from './material/material-modules';
import {PrimengModules} from './primeng/primeng-modules';
import {AngularModules} from './angular/angular-modules';
import {ReactiveComponentModule} from '@ngrx/component';

@NgModule({
  exports: [
    MaterialModules,
    PrimengModules,
    AngularModules,
    ReactiveComponentModule,
  ],
})
export class SharedModule {
}

