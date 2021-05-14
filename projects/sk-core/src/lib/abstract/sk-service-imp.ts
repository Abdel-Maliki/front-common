/**
 * @author abdel-maliki
 */
import {AbstractEntity} from './abstract-entity';
import {ISkService} from '../interfaces/service';
import {i18nConstantes} from '../constantes/i18n-constantes';
import {NodeServiceData} from './node-service-data';
import {HeadersOptions, HttpHelpers} from '../utils/http-helpers';
import {ActivatedRouteSnapshot} from '@angular/router';
import {ResponseWrapper} from '../utils/response-wrapper';
import {Observable} from 'rxjs';
import {Store} from '@ngxs/store';
import {SKConfigState} from '../ngxs';
import {Pagination} from '../utils/pagination';


export abstract class SkServiceImp<T extends AbstractEntity<T>> implements ISkService<T> {

  errorMessage: string | undefined;

  protected constructor(protected data: NodeServiceData, protected store: Store) {
    data.translate.get(i18nConstantes.errorMessage).toPromise().then(value => this.errorMessage = value);
  }

  get baseOption(): HeadersOptions {
    return HttpHelpers.getOptions();
  }


  abstract getPath(): string;

  get(id: number | string, others?: any): Observable<ResponseWrapper<T>> {
    return this.data.httpClient.put<ResponseWrapper<T>>(this.getUrl(`read/${id}`), JSON.stringify(others), this.baseOption);
  }

  delete(id: number | string, others?: any): Observable<ResponseWrapper<T>> {
    return this.data.httpClient.put<ResponseWrapper<T>>(this.getUrl(`delete/${id}`), JSON.stringify(others), this.baseOption);
  }

  create(entity: T, others?: any): Observable<ResponseWrapper<T>> {
    return this.data.httpClient.post<ResponseWrapper<T>>(this.getUrl(),
      JSON.stringify({entity, others}), this.baseOption);
  }

  update(entity: T, id: number | string, others?: any): Observable<ResponseWrapper<T>> {
    return this.data.httpClient.put<ResponseWrapper<T>>(this.getUrl(`update/${id}`),
      JSON.stringify({entity, others}), this.baseOption);
  }

  pageElements(pagination: Pagination, others?: any): Observable<ResponseWrapper<T[]>> {
    return this.data.httpClient.post<ResponseWrapper<T[]>>(this.getUrl('page'),
      JSON.stringify({pagination, others}), this.baseOption);
  }

  createAndGet(data: { entity: T; pagination: Pagination; }, others?: any): Observable<ResponseWrapper<T[]>> {
    return this.data.httpClient.post<ResponseWrapper<T[]>>(this.getUrl(`create/and-get`),
      JSON.stringify({entity: data.entity, pagination: data.pagination, others}), this.baseOption);
  }

  updateAndGet(data: { entity: T; pagination: Pagination; }, id: string | number, others?: any): Observable<ResponseWrapper<T[]>> {
    return this.data.httpClient.put<ResponseWrapper<T[]>>(this.getUrl(`/update/and-get/${id}`),
      JSON.stringify({entity: data.entity, pagination: data.pagination, others}), this.baseOption);
  }

  deleteAndGet(pagination: Pagination, id: string | number, others?: any): Observable<ResponseWrapper<T[]>> {
    return this.data.httpClient.put<ResponseWrapper<T[]>>(this.getUrl(`delete/and-get/${id}`)
      , JSON.stringify({pagination, others}), this.baseOption);
  }

  deleteAllAndGet(entities: T[], pagination: Pagination, others?: any): Observable<ResponseWrapper<T[]>> {
    return this.data.httpClient.put<ResponseWrapper<T[]>>(this.getUrl('delete-all/and-get'),
      JSON.stringify({pagination, ids: entities.map(value => value.id), others}), this.baseOption);
  }

  saveAll(entities: T[], others?: any): Observable<ResponseWrapper<T[]>> {
    return this.data.httpClient.post<ResponseWrapper<T[]>>(this.getUrl('save/all'),
      JSON.stringify({entities, others}), this.baseOption);
  }

  updateAll(entities: T[], others?: any): Observable<ResponseWrapper<T[]>> {
    return this.data.httpClient.post<ResponseWrapper<T[]>>(this.getUrl('update/all'),
      JSON.stringify({entities, others}), this.baseOption);
  }

  deleteAll(entities: T[], others?: any): Observable<ResponseWrapper<T[]>> {
    return this.data.httpClient.put<ResponseWrapper<T[]>>(this.getUrl('delete/all'),
      JSON.stringify({ids: entities.map(value => value.id), others}), this.baseOption);
  }

  getAll(others?: any): Observable<ResponseWrapper<T[]>> {
    return this.data.httpClient.put<ResponseWrapper<T[]>>(this.getUrl('get/all'), JSON.stringify(others), this.baseOption);
  }

  getUrl(params?: string | number): string {
    if (params && typeof params === 'string' && params.startsWith('/')) {
      params = params.substring(0, params.length);
    }
    return this.store.selectSnapshot(SKConfigState.backendUrlSelector) + this.removeFirstSlash(this.getPath()) + (params ? `/${this.removeFirstSlash(params)}` : ``);
  }

  removeFirstSlash(params: string | number): string {
    return (params && typeof params === 'string' && params.length > 0 && params.startsWith('/'))
      ? params.substring(1, params.length)
      : `${params}`;
  }

  resolverFormJob(route: ActivatedRouteSnapshot, id?: string, others?: any): Observable<ResponseWrapper<T>> {
    throw new Error('Not implemented');
  }
}
