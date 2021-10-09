import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SK_USER_SERVICE} from '../../classes';
import {SkUserListResolver} from './services/sk-user-list-resolver';
import {SkUserFormResolver} from './services/sk-user-form-resolver.service';
import {SkUserService} from './services/sk-user.service';
import {SkUserListPageModule} from './components/sk-user-list-page/sk-user-list-page.module';
import {NgxsModule} from '@ngxs/store';
import {SKUserModelState} from './services/sk-user-state';
import {SkUserFormPageModule} from './components/sk-user-form-page/sk-user-form-page.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsModule.forFeature([SKUserModelState]),

    SkUserListPageModule,
    SkUserFormPageModule,
  ], providers: [
    SkUserListResolver,
    SkUserFormResolver,
    {provide: SK_USER_SERVICE, useClass: SkUserService}
  ]
})
export class SkUserModule {
}
