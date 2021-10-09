import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxsModule} from '@ngxs/store';
import {SKProfileModelState} from './services/sk-profile-state';
import {SkProfileService} from './services/sk-profile.service';
import {SkProfileListPageModule} from './components/sk-profile-list-page/sk-profile-list-page.module';
import {SkProfileFormPageModule} from './components/sk-profile-form-page/sk-profile-form-page.module';
import {SkProfileListResolver} from './services/sk-profile-list-resolver';
import {SkProfileFormResolver} from './services/sk-profile-form-resolver.service';
import {SK_PROFILE_SERVICE} from '../../classes';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsModule.forFeature([SKProfileModelState]),
    SkProfileListPageModule,
    SkProfileFormPageModule,
  ], providers: [
    SkProfileListResolver,
    SkProfileFormResolver,
    {provide: SK_PROFILE_SERVICE, useClass: SkProfileService}
  ],
})
export class SkProfileModule {
}
