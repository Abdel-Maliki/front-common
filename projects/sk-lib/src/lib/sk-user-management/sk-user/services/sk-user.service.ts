import {Injectable} from '@angular/core';
import {Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {SkAbstractService} from '../../../abstract';
import {ResponseWrapper} from '../../../utils';
import {InterfaceUser} from './interface-user';
import {SKIPagination} from '@sk-framework/sk-core';
import {SkIUserDomain, SkUserDomain} from '../classes/sk-user-domain';
import {SkServiceData} from '../../../services';

@Injectable()
export class SkUserService extends SkAbstractService<SkIUserDomain> implements InterfaceUser {

  constructor(protected data: SkServiceData, protected store: Store) {
    super(data, store);
  }


  getPath(): string {
    return 'users';
  }

  fromJson(jsonValue: SkIUserDomain | undefined): SkIUserDomain | undefined {
    return SkUserDomain.fromJson(jsonValue);
  }

  toJson(model: SkIUserDomain | undefined): SkIUserDomain | undefined {
    return SkUserDomain.toJson(model);
  }

  updateMyPassword(oldPassword: string, newPassword: string): Observable<ResponseWrapper<{ token: string; }>> {
    return this.data.httpClient.put<ResponseWrapper<{ token: string; }>>(this.getUrl(`update-my-password`)
      , JSON.stringify({oldPassword, newPassword}), this.baseOption);
  }

  activateAccount(pagination: SKIPagination, id: number | string, password: string): Observable<ResponseWrapper<SkIUserDomain[]>> {
    return this.data.httpClient.put<ResponseWrapper<SkIUserDomain[]>>(this.getUrl(`activate/${id}`)
      , JSON.stringify({pagination, others: {password}}), this.baseOption);
  }

  disableAccount(pagination: SKIPagination, id: number | string, password: string): Observable<ResponseWrapper<SkIUserDomain[]>> {
    return this.data.httpClient.put<ResponseWrapper<SkIUserDomain[]>>(this.getUrl(`disable/${id}`)
      , JSON.stringify({pagination, others: {password}}), this.baseOption);
  }

  activateAllAccount(entities: SkIUserDomain[], pagination: SKIPagination, password: string): Observable<ResponseWrapper<SkIUserDomain[]>> {
    return this.data.httpClient.put<ResponseWrapper<SkIUserDomain[]>>(this.getUrl('activate-all'),
      JSON.stringify({others: {password}, pagination, ids: entities.map(value => value.id)}), this.baseOption);
  }

  disableAllAccount(entities: SkIUserDomain[], pagination: SKIPagination, password: string): Observable<ResponseWrapper<SkIUserDomain[]>> {
    return this.data.httpClient.put<ResponseWrapper<SkIUserDomain[]>>(this.getUrl('disable-all'),
      JSON.stringify({others: {password}, pagination, ids: entities.map(value => value.id)}), this.baseOption);
  }

  resetPassword(id: string | number, password: string): Observable<ResponseWrapper<void>> {
    return this.data.httpClient.put<ResponseWrapper<void>>(this.getUrl(`reset-password/${id}`), {others: {password}}, this.baseOption);
  }

  allUsernames(): Observable<ResponseWrapper<string[]>> {
    return this.data.httpClient.get<ResponseWrapper<string[]>>(this.getUrl('all-user-name'), this.baseOption);
  }

  forgotPasswordRequest(email: string): Observable<ResponseWrapper<void>> {
    return this.data.httpClient.put<ResponseWrapper<void>>(this.getUrl(`forget-password-request`), JSON.stringify({email}),
      this.baseOption);
  }

  forgotPasswordFinalisation(token: string, password: string): Observable<ResponseWrapper<void>> {
    return this.data.httpClient.put<ResponseWrapper<void>>(this.getUrl(`forget-password-finatisation`),
      JSON.stringify({token, password}), this.baseOption);
  }
}
