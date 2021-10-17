import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {NgxsModule} from '@ngxs/store';
import {environment} from '../environments/environment';
import {skStates} from 'sk-core';
import {
  SkSidenavContainerModule,
  SK_ENTERPRISE_SERVICE,
  SkEnterpriseService,
  SK_PROFILE_SERVICE,
  SkProfileService,
} from 'sk-lib';
import {TranslateModule} from '@ngx-translate/core';
import {HttpClientModule} from '@angular/common/http';
import {AppInitializerService} from './app-initializer-service';
import {SharedModule} from '../../../sk-lib/src/lib/shared/shared-module';

export function appInit(appInitializerService: AppInitializerService): () => Promise<void> {
  return () => appInitializerService.initApp();
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([...skStates], {
      selectorOptions: {
        suppressErrors: false,
        injectContainerState: false,
      },
      developmentMode: !environment.production
    }),
    TranslateModule.forRoot({
      defaultLanguage: 'fr',
    }),
    SkSidenavContainerModule,
    SharedModule,
    HttpClientModule,
    SharedModule,
    // LayoutModule
  ],
  providers: [
    AppInitializerService,
    {provide: SK_ENTERPRISE_SERVICE, useClass: SkEnterpriseService},
    {provide: SK_PROFILE_SERVICE, useClass: SkProfileService},
    {
      provide: APP_INITIALIZER,
      useFactory: appInit,
      multi: true,
      deps: [AppInitializerService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

