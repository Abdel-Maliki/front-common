/**
 * @author abdel-maliki
 * Date : 15/03/2021
 */

export interface SkAuthStateModel {
  token: string;
  user: any;
  roles: string[];
  passwordState: PasswordState;
}

export enum PasswordState {
  UNKNOWN = 'UNKNOWN',
  VALID = 'VALID',
  INVALID = 'INVALID',
}
