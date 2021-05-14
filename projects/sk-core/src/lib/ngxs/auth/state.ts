import {Action, NgxsOnInit, Selector, State, StateContext, StateToken} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {PasswordState, SkAuthStateModel} from './type';
import {
  LoginAction,
  LogoutAction,
  SetRolesAction,
  SetTokenAction,
  SetUserAction,
  ValidPasswordAction,
  InvalidPasswordAction,
  UnknownPasswordAction
} from './actions';

/**
 * @author abdel-maliki
 */


export const SK_AUTH_STATE_TOKEN = new StateToken<SkAuthStateModel>('skAuthState');

@State({
  name: SK_AUTH_STATE_TOKEN,
  defaults: {
    token: '',
    user: null,
    passwordState: PasswordState.INVALID,
    roles: []
  }
})
@Injectable()
export class SkAuthState implements NgxsOnInit {

  @Selector([SK_AUTH_STATE_TOKEN])
  static tokenSelector(state: SkAuthStateModel): string {
    return state.token;
  }

  @Selector([SK_AUTH_STATE_TOKEN])
  static userSelector(state: SkAuthStateModel): any {
    return state.user;
  }

  @Selector([SK_AUTH_STATE_TOKEN])
  static rolesSelector(state: SkAuthStateModel): string[] {
    return state.roles;
  }

  @Selector([SK_AUTH_STATE_TOKEN])
  static validPasswordStateSelector(state: SkAuthStateModel): boolean {
    return state.passwordState === PasswordState.VALID;
  }

  @Selector([SK_AUTH_STATE_TOKEN])
  static invalidPasswordStateSelector(state: SkAuthStateModel): boolean {
    return state.passwordState === PasswordState.INVALID;
  }

  @Selector([SK_AUTH_STATE_TOKEN])
  static unknownPasswordStateSelector(state: SkAuthStateModel): boolean {
    return state.passwordState === PasswordState.UNKNOWN;
  }

  @Action(SetTokenAction)
  setToken(ctx: StateContext<SkAuthStateModel>, {payload}: SetTokenAction): void {
    ctx.patchState({token: payload});
  }

  @Action(SetUserAction)
  setUser(ctx: StateContext<SkAuthStateModel>, {payload}: SetUserAction): void {
    ctx.patchState({user: payload});
  }

  @Action(SetRolesAction)
  setRolesAction(ctx: StateContext<SkAuthStateModel>, {payload}: SetRolesAction): void {
    ctx.patchState({roles: payload});
  }

  @Action(LoginAction)
  login(ctx: StateContext<SkAuthStateModel>): void {
    ctx.patchState({});
  }

  @Action(ValidPasswordAction)
  validPasswordAction(ctx: StateContext<SkAuthStateModel>): void {
    ctx.patchState({passwordState: PasswordState.VALID});
  }

  @Action(InvalidPasswordAction)
  invalidPasswordAction(ctx: StateContext<SkAuthStateModel>): void {
    ctx.patchState({passwordState: PasswordState.INVALID});
  }

  @Action(UnknownPasswordAction)
  unknownPasswordAction(ctx: StateContext<SkAuthStateModel>): void {
    ctx.patchState({passwordState: PasswordState.UNKNOWN});
  }

  @Action(LogoutAction)
  logout(ctx: StateContext<SkAuthStateModel>): void {
    ctx.patchState({});
  }

  ngxsOnInit(ctx?: StateContext<SkAuthStateModel>): any {
  }

}
