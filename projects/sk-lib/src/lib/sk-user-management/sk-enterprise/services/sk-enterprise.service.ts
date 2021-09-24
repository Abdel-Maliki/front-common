import {Injectable} from '@angular/core';
import {SkEnterpriseModel, SkIEnterprise} from '../sk-enterprise-model';
import {SkServiceData, ResponseWrapper} from 'sk-core';
import {Store} from '@ngxs/store';
import {Observable, of} from 'rxjs';
import {Pagination} from '../../../utils/pagination';
import {SkAbstractService} from '../../../abstract';

@Injectable()
export class SkEnterpriseService extends SkAbstractService<SkEnterpriseModel> {

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
    pagination = this.saFePagination(pagination);
    const list: SkIEnterprise[] = [];
    const first = (pagination.size * pagination.page) + 1;
    const second = (pagination.size * (pagination.page + 1)) + 1;
    for (let i = first; i < second; i++) {
      list.push(new SkEnterpriseModel(`name ${i}`, `tel ${i}`, `desc ${i}`, `adress ${i}`,
        `email${i}@gmail.com`, `${i}`));
    }

    return of(new ResponseWrapper<SkIEnterprise[]>(list, {
      page: pagination.page,
      totalElements: pagination.size * 10,
      size: pagination.size
    }, 200));
  }

  create(entity: SkEnterpriseModel, others?: any): Observable<ResponseWrapper<SkEnterpriseModel>> {
    entity.id = Math.round(Math.random() * 10);
    return of(new ResponseWrapper<SkIEnterprise>(entity, undefined, 200));
  }

}
