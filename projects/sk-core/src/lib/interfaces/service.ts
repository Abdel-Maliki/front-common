import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot} from '@angular/router';
import {ResponseWrapper} from '../utils/response-wrapper';
import {Pagination} from '../utils/pagination';

/**
 * @author abdel-maliki
 */


export interface ISkService<T, ID extends string | number = any> {

  get(id: number | string): Observable<ResponseWrapper<T>>;

  getAll(others?: any): Observable<ResponseWrapper<T[]>>;

  pageElements(pagination: Pagination, others?: any): Observable<ResponseWrapper<T[]>>;

  create(entity: T, others?: any): Observable<ResponseWrapper<T>>;

  update(entity: T, id: number | string, others?: any): Observable<ResponseWrapper<T>>;

  delete(id: number | string, ...data: any): Observable<ResponseWrapper<T>>;

  createAndGet(data: { entity: T, pagination: Pagination }, others?: any): Observable<ResponseWrapper<T[]>>;

  updateAndGet(data: { entity: T, pagination: Pagination }, id: number | string, others?: any): Observable<ResponseWrapper<T[]>>;

  deleteAndGet(pagination: Pagination, id: number | string, others?: any): Observable<ResponseWrapper<T[]>>;

  deleteAllAndGet?(entities: T[], pagination: Pagination, others?: any): Observable<ResponseWrapper<T[]>>;

  resolverFormJob(route: ActivatedRouteSnapshot, id?: string, others?: any): Observable<ResponseWrapper<T>>;

  saveAll?(entities: T[], others?: any): Observable<ResponseWrapper<T[]>>;

  updateAll?(entities: T[], others?: any): Observable<ResponseWrapper<T[]>>;

  deleteAll?(ids: ID[], others?: any): Observable<ResponseWrapper<T[]>>;

  getPath(): string;
}
