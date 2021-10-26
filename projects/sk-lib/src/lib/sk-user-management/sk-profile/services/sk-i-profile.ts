import {SkIProfileDomain} from '../classes/sk-profile-domain';
import {ISkService} from '@sk-framework/sk-core';
import {Observable} from 'rxjs';
import {ResponseWrapper} from '../../../utils';

/**
 * @author abdel-maliki
 */

export interface SkIProfile extends ISkService<SkIProfileDomain> {
  getRoles(id: number | string): Observable<ResponseWrapper<string[]>>;

  setRoles(id: number | string, roles: string[], password: string): Observable<ResponseWrapper<void>>;
}

