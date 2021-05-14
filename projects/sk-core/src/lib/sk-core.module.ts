import {NgModule, Optional, SkipSelf} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {SkJwtInterceptor} from './interceptors/jwt-interceptor';
import {SkErrorInterceptor} from './interceptors/error-interceptor';
import {SkLoadingInterceptor} from './interceptors/loading.interceptor';
import {AuthGuard} from './guard/auth-guard';
import {LoginGuard} from './guard/login-guard';

@NgModule({
  declarations: [
  ],
  imports: [],
  providers: [
    AuthGuard,
    LoginGuard,
    {provide: HTTP_INTERCEPTORS, useClass: SkLoadingInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: SkJwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: SkErrorInterceptor, multi: true},
  ],
  exports: []
})
export class SkCoreModule {
  constructor(@Optional() @SkipSelf() core: SkCoreModule) {
    if (core) {
      throw new Error('Vous ne devez importer SkCoreModule que dans le module racine');
    }
  }
}
