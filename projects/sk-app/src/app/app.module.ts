import {InjectionToken, NgModule} from '@angular/core';
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
import {StoreModule} from '@ngrx/store';
import {SkCoreModule, skReducers} from 'sk-core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {SidenavContainerModule} from 'sk-lib';
import {RouterTestComponent} from './router-test/router-test.component';

export const ROOT_REDUCER = new InjectionToken<any>('Root Reducer');


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
    LayoutModule,
    SkCoreModule,
    StoreModule.forRoot({...skReducers}),
    SidenavContainerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule
  ],
  providers: [
    {provide: ROOT_REDUCER, useValue: {skState: skReducers}},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

