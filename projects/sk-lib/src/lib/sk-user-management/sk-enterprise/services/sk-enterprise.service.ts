import {Injectable} from '@angular/core';
import {SkEnterpriseDomain, SkIEnterprise} from '../classes/sk-enterprise-domain';
import {Store} from '@ngxs/store';
import {SkAbstractService} from '../../../abstract';
import {SkServiceData} from '../../../services';

@Injectable()
export class SkEnterpriseService extends SkAbstractService<SkEnterpriseDomain> {

  constructor(protected data: SkServiceData, protected store: Store) {
    super(data, store);
  }

  getPath(): string {
    return 'enterprises';
  }

  fromJson(jsonValue: SkIEnterprise | undefined): SkEnterpriseDomain | undefined {
    return SkEnterpriseDomain.fromJson(jsonValue);
  }

  toJson(model: SkEnterpriseDomain | undefined): SkIEnterprise | undefined {
    return SkEnterpriseDomain.toJson(model);
  }
}
