import {ISkService} from '../../interfaces/service';
import {Pagination} from '../../utils/pagination';
import {ResponseWrapper} from '../../utils/response-wrapper';
import {InjectionToken} from '@angular/core';

class UserDomain {
}

/**
 * @author abdel-maliki
 */

export const USER_SERVICE_IMP = new InjectionToken<ISKUser>('IUser Implementation');

export interface ISKUser extends ISkService<UserDomain> {

  activateAccount(pagination: Pagination, id: number | string, password: string): Promise<ResponseWrapper<UserDomain[]>>;

  disableAccount(pagination: Pagination, id: number | string, password: string): Promise<ResponseWrapper<UserDomain[]>>;

  activateAllAccount(entities: UserDomain[], pagination: Pagination, password: string): Promise<ResponseWrapper<UserDomain[]>>;

  disableAllAccount(entities: UserDomain[], pagination: Pagination, password: string): Promise<ResponseWrapper<UserDomain[]>>;

  resetPassword(id: string | number, password: string): Promise<ResponseWrapper<void>>;

  updateMyPassword(oldPassword: string, newPassword: string): Promise<ResponseWrapper<{ token: string }>>;

  forgotPasswordRequest(email: string): Promise<ResponseWrapper<void>>;

  forgotPasswordFinalisation(token: string, password: string): Promise<ResponseWrapper<void>>;

  allUsernames(): Promise<ResponseWrapper<string[]>>;

}
