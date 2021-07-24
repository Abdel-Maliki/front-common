import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {RadioButtonModule} from 'primeng/radiobutton';
import {NgxUiLoaderModule} from 'ngx-ui-loader';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {LayoutModule} from '@angular/cdk/layout';
import {SkCoreModule} from 'sk-core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {RouterTestComponent} from './router-test/router-test.component';
import {NgModule} from '@angular/core';
import {NgxsModule} from '@ngxs/store';
import {environment} from '../environments/environment';
import {skStates} from '../../../sk-core/src/lib/ngxs';
import {SidenavContainerModule} from '../../../sk-lib/src/lib/components';
import {SkListComponentHeaderModule} from '../../../sk-lib/src/lib/components';
import {SharedModule} from '../../../sk-lib/src/lib/shared/shared-module';
import {SkEnterpriseListModule} from '../../../sk-lib/src/lib/sk-user-management';


@NgModule({
  declarations: [
    AppComponent,
    RouterTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    RadioButtonModule,
    NgxUiLoaderModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    NgxsModule.forRoot([...skStates], {
      selectorOptions: {
        suppressErrors: false,
        injectContainerState: false,
      },
      developmentMode: !environment.production
    }),
    LayoutModule,
    SkCoreModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    SidenavContainerModule,
    SkListComponentHeaderModule,
    SkEnterpriseListModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

