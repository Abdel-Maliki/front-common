/**
 * @author abdel-maliki
 */

export class SetTokenAction {
  static readonly type = '[Auth] Set Token';

  constructor(public payload: string) {
  }
}

export class SetUserAction {
  static readonly type = '[Auth] Set User';

  constructor(public payload: any) {
  }
}

export class SetRolesAction {
  static readonly type = '[Auth] Set Roles';

  constructor(public payload: string[]) {
  }
}

export class LoginAction {
  static readonly type = '[Auth] Login';

  constructor(public payload: { username: string; password: string }) {
  }
}

export class ValidPasswordAction {
  static readonly type = '[Auth] UNKNOWN VALID';
}

export class InvalidPasswordAction {
  static readonly type = '[Auth] UNKNOWN INVALID';
}


export class UnknownPasswordAction {
  static readonly type = '[Auth] UNKNOWN PASSWORD';
}


export class LogoutAction {
  static readonly type = '[Auth] Logout';
}
