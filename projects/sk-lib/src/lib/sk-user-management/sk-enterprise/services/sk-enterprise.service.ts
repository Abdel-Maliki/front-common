import {Injectable} from '@angular/core';
import {SkEnterpriseDomain, SkIEnterprise} from '../classes/sk-enterprise-domain';
import {SkIResponseWrapper, SKIPagination} from 'sk-core';
import {Store} from '@ngxs/store';
import {Observable, of} from 'rxjs';
import {Pagination} from '../../../utils/pagination';
import {SkAbstractService} from '../../../abstract';
import {ResponseWrapper} from '../../../utils';
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

  get(id: any, others?: any): Observable<SkIResponseWrapper<SkIEnterprise>> {
    return of(new ResponseWrapper<SkIEnterprise>(new SkEnterpriseDomain('name', 'tel', 'desciption', 'address', 'email@gmail.com', id),
      undefined, 200));
  }

  pageElements(pagination: Pagination, others?: any): Observable<SkIResponseWrapper<SkIEnterprise[]>> {
    pagination = this.saFePagination(pagination);
    const list: SkIEnterprise[] = [];
    const first = (pagination.size * pagination.page) + 1;
    const second = (pagination.size * (pagination.page + 1)) + 1;
    for (let i = first; i < second; i++) {
      list.push(new SkEnterpriseDomain(`name ${i}`, `tel ${i}`, `desc ${i}`, `adress ${i}`,
        `email${i}@gmail.com`, `${i}`));
    }

    return of(new ResponseWrapper<SkIEnterprise[]>(list, {
      page: pagination.page,
      totalElements: pagination.size * 10,
      size: pagination.size
    }, 200));
  }

  create(entity: SkEnterpriseDomain, others?: any): Observable<SkIResponseWrapper<SkEnterpriseDomain>> {
    entity.id = Math.round(Math.random() * 10);
    return of(new ResponseWrapper<SkIEnterprise>(entity, undefined, 200));
  }

  update(entity: SkEnterpriseDomain, id: any, others?: any): Observable<SkIResponseWrapper<SkEnterpriseDomain>> {
    return of(new ResponseWrapper<SkIEnterprise>({...entity, id}, undefined, 200));
  }

  createAndGet(data: { entity: SkEnterpriseDomain; pagination: SKIPagination }, others?: any)
    : Observable<SkIResponseWrapper<SkIEnterprise[]>> {
    const pagination = this.saFePagination(data.pagination);
    const list: SkIEnterprise[] = [];
    const first = (pagination.size * pagination.page) + 1;
    const second = (pagination.size * (pagination.page + 1)) + 1;
    for (let i = first; i < second; i++) {
      list.push(new SkEnterpriseDomain(`name ${i}`, `tel ${i}`, `desc ${i}`, `adress ${i}`,
        `email${i}@gmail.com`, `${i}`));
    }

    console.log('Class: SkEnterpriseService, Function: createAndGet, Line 71 pagination(): '
      , pagination);

    console.log('Class: SkEnterpriseService, Function: createAndGet, Line 74 list(): '
      , list);

    return of(new ResponseWrapper<SkIEnterprise[]>(list, {
      page: pagination.page,
      totalElements: pagination.size * 10,
      size: pagination.size
    }, 200));
  }

  updateAndGet(data: { entity: SkEnterpriseDomain; pagination: SKIPagination }, id: string | number, others?: any)
    : Observable<SkIResponseWrapper<SkIEnterprise[]>> {
    const pagination = this.saFePagination(data.pagination);
    const list: SkIEnterprise[] = [];
    const first = (pagination.size * pagination.page) + 1;
    const second = (pagination.size * (pagination.page + 1)) + 1;
    for (let i = first; i < second; i++) {
      list.push(new SkEnterpriseDomain(`name ${i}`, `tel ${i}`, `desc ${i}`, `adress ${i}`,
        `email${i}@gmail.com`, `${i}`));
    }

    console.log('Class: SkEnterpriseService, Function: createAndGet, Line 95 list(): '
      , list);

    console.log('Class: SkEnterpriseService, Function: createAndGet, Line 98 pagination(): '
      , pagination);

    return of(new ResponseWrapper<SkIEnterprise[]>(list, {
      page: pagination.page,
      totalElements: pagination.size * 10,
      size: pagination.size
    }, 200));
  }
}
