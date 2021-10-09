import {Injectable} from '@angular/core';
import {SkServiceData} from 'sk-core';
import {Store} from '@ngxs/store';
import {Observable, of} from 'rxjs';
import {SkAbstractService} from '../../../abstract';
import {ResponseWrapper} from '../../../utils';
import {SkIProfileDomain, SkProfileDomain} from '../classes/sk-profile-domain';
import {InterfaceProfile} from './interface-profile';
import {Roles} from 'sk-core';

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
    return of(ResponseWrapper.ok(Object.values<string>(Roles)));
  }

  setRoles(id: number | string, roles: string[], password: string): Observable<ResponseWrapper<void>> {
    return of(ResponseWrapper.ok());
  }
}
