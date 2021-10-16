import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {NgxsModule} from '@ngxs/store';
import {environment} from '../environments/environment';
import {skStates} from 'sk-core';
import {SkSidenavContainerModule, SK_ENTERPRISE_SERVICE} from 'sk-lib';
import {SharedModule} from '../../../sk-lib/src/lib/shared/shared-module';
import {TranslateModule} from '@ngx-translate/core';
import {HttpClientModule} from '@angular/common/http';
import {SkEnterpriseService} from '../../../sk-lib/src/lib/sk-user-management';
import {SK_PROFILE_SERVICE} from '../../../sk-lib/src/lib/classes';
import {SkProfileService} from '../../../sk-lib/src/lib/sk-user-management/sk-profile/services/sk-profile.service';


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
    // LayoutModule
  ],
  providers: [
    {provide: SK_ENTERPRISE_SERVICE, useClass: SkEnterpriseService},
    {provide: SK_PROFILE_SERVICE, useClass: SkProfileService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

