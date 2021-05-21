import {NgModule} from '@angular/core';
import {MaterialModules} from './material/material-modules';
import {PrimengModules} from './primeng/primeng-modules';
import {AngularModules} from './angular/angular-modules';

@NgModule({
  exports: [
    MaterialModules,
    PrimengModules,
    AngularModules,
  ],
})
export class SharedModule {
}

