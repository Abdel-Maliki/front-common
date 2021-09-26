import {ISkService, SKIPagination} from '../../interfaces';
import {SkIResponseWrapper} from '../../interfaces';
import {InjectionToken} from '@angular/core';

class UserDomain {
}

/**
 * @author abdel-maliki
 */

export const USER_SERVICE_IMP = new InjectionToken<ISKUser>('IUser Implementation');

export interface ISKUser extends ISkService<UserDomain> {

  activateAccount(pagination: SKIPagination, id: number | string, password: string): Promise<SkIResponseWrapper<UserDomain[]>>;

  disableAccount(pagination: SKIPagination, id: number | string, password: string): Promise<SkIResponseWrapper<UserDomain[]>>;

  activateAllAccount(entities: UserDomain[], pagination: SKIPagination, password: string): Promise<SkIResponseWrapper<UserDomain[]>>;

  disableAllAccount(entities: UserDomain[], pagination: SKIPagination, password: string): Promise<SkIResponseWrapper<UserDomain[]>>;

  resetPassword(id: string | number, password: string): Promise<SkIResponseWrapper<void>>;

  updateMyPassword(oldPassword: string, newPassword: string): Promise<SkIResponseWrapper<{ token: string }>>;

  forgotPasswordRequest(email: string): Promise<SkIResponseWrapper<void>>;

  forgotPasswordFinalisation(token: string, password: string): Promise<SkIResponseWrapper<void>>;

  allUsernames(): Promise<SkIResponseWrapper<string[]>>;

}
