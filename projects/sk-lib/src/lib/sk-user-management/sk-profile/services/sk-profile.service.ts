import {Injectable} from '@angular/core';
import {Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {SkAbstractService} from '../../../abstract';
import {ResponseWrapper} from '../../../utils';
import {SkIProfileDomain, SkProfileDomain} from '../classes/sk-profile-domain';
import {InterfaceProfile} from './interface-profile';
import {SkServiceData} from '../../../services';

@Injectable()
export class SkProfileService extends SkAbstractService<SkIProfileDomain> implements InterfaceProfile {

  constructor(protected data: SkServiceData, protected store: Store) {
    super(data, store);
  }


  getPath(): string {
    return 'profiles';
  }

  fromJson(jsonValue: SkProfileDomain | undefined): SkProfileDomain | undefined {
    return SkProfileDomain.fromJson(jsonValue);
  }

  toJson(model: SkProfileDomain | undefined): SkProfileDomain | undefined {
    return SkProfileDomain.toJson(model);
  }

  getRoles(id: number | string): Observable<ResponseWrapper<string[]>> {
    return this.data.httpClient.get<ResponseWrapper<string[]>>(this.getUrl(`roles/${id}`), this.baseOption);
  }

  setRoles(id: number | string, roles: string[], password: string): Observable<ResponseWrapper<void>> {
    return this.data.httpClient.put<ResponseWrapper<void>>(this.getUrl(`set-roles/${id}`), {roles, others: {password}},
      this.baseOption);
  }
}
