import {Injectable} from '@angular/core';
import {SkEnterpriseModel, SkIEnterprise} from '../sk-enterprise-model';
import {SkAbstractService, SkServiceData, ResponseWrapper} from 'sk-core';
import {Store} from '@ngxs/store';
import {Observable, of} from 'rxjs';
import {Pagination} from '../../../utils/pagination';

@Injectable()
export class SkEnterpriseService extends SkAbstractService<SkEnterpriseModel, SkIEnterprise> {

  constructor(protected data: SkServiceData, protected store: Store) {
    super(data, store);
  }

  getPath(): string {
    return 'enterprises';
  }

  fromJson(jsonValue: SkIEnterprise | undefined): SkEnterpriseModel | undefined {
    return SkEnterpriseModel.fromJson(jsonValue);
  }

  toJson(model: SkEnterpriseModel | undefined): SkIEnterprise | undefined {
    return SkEnterpriseModel.toJson(model);
  }

  get(id: any, others?: any): Observable<ResponseWrapper<SkIEnterprise>> {
    return of(new ResponseWrapper<SkIEnterprise>(new SkEnterpriseModel('name', 'tel'), undefined, 200));
  }

  pageElements(pagination: Pagination, others?: any): Observable<ResponseWrapper<SkIEnterprise[]>> {
    return of(new ResponseWrapper<SkIEnterprise[]>([
      new SkEnterpriseModel('name 1', 'tel 1'),
      new SkEnterpriseModel('name 2', 'tel 2'),
      new SkEnterpriseModel('name 3', 'tel 3'),
      new SkEnterpriseModel('name 4', 'tel 4'),
    ], {page: pagination.page, totalElements: 4, size: pagination.size}, 200));
  }

}
