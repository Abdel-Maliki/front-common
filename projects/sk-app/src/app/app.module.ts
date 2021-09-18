import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {NgxsModule} from '@ngxs/store';
import {environment} from '../environments/environment';
import {skStates} from 'sk-core';
import {SkSidenavContainerModule} from 'sk-lib';
import {SharedModule} from '../../../sk-lib/src/lib/shared/shared-module';
import {TranslateModule} from '@ngx-translate/core';
import {HttpClientModule} from '@angular/common/http';


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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

