import {ISkService} from 'sk-core';
import {Observable} from 'rxjs';
import {ResponseWrapper} from '../../../utils';
import {SkIUserDomain} from '../classes/sk-user-domain';
import {SKIPagination} from 'sk-core';

/**
 * @author abdel-maliki
 */

export interface InterfaceUser extends ISkService<SkIUserDomain> {

  activateAccount(pagination: SKIPagination, id: number | string, password: string): Observable<ResponseWrapper<SkIUserDomain[]>>;

  disableAccount(pagination: SKIPagination, id: number | string, password: string): Observable<ResponseWrapper<SkIUserDomain[]>>;

  activateAllAccount(entities: SkIUserDomain[], pagination: SKIPagination, password: string): Observable<ResponseWrapper<SkIUserDomain[]>>;

  disableAllAccount(entities: SkIUserDomain[], pagination: SKIPagination, password: string): Observable<ResponseWrapper<SkIUserDomain[]>>;

  resetPassword(id: string | number, password: string): Observable<ResponseWrapper<void>>;

  updateMyPassword(oldPassword: string, newPassword: string): Observable<ResponseWrapper<{ token: string }>>;

  forgotPasswordRequest(email: string): Observable<ResponseWrapper<void>>;

  forgotPasswordFinalisation(token: string, password: string): Observable<ResponseWrapper<void>>;

  allUsernames(): Observable<ResponseWrapper<string[]>>;
}

