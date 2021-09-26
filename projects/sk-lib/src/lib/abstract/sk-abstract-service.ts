/**
 * @author abdel-maliki
 */
import {
  ISkService, SKIEntity, i18nConstantes, SkServiceData, SKConfigState, SKIPagination, SkIResponseWrapper
} from 'sk-core';
import {Observable} from 'rxjs';
import {Store} from '@ngxs/store';
import {HeadersOptions, HttpHelpers} from '../utils';


export abstract class SkAbstractService<T extends SKIEntity<T>, ID extends string | number = any> implements ISkService<T> {

  errorMessage: string | undefined;

  protected constructor(protected data: SkServiceData, protected store: Store) {
    data.translate.get(i18nConstantes.errorMessage).toPromise().then(value => this.errorMessage = value);
  }

  /*********************************************
   *********************************************
   *********************************************
   ************* IMPLEMENTATIONS ***************
   *********************************************
   *********************************************
   *********************************************/


  /******************************************
   ****************** READ *******************
   ******************************************/

  get(id: ID, others?: any): Observable<SkIResponseWrapper<T>> {
    return this.data.httpClient.put<SkIResponseWrapper<T>>(this.getUrl(`read/${id}`), JSON.stringify(others), this.baseOption);
  }

  getAll(others?: any): Observable<SkIResponseWrapper<T[]>> {
    return this.data.httpClient.put<SkIResponseWrapper<T[]>>(this.getUrl('get/all'), JSON.stringify(others), this.baseOption);
  }

  pageElements(pagination: SKIPagination, others?: any): Observable<SkIResponseWrapper<T[]>> {
    return this.data.httpClient.post<SkIResponseWrapper<T[]>>(this.getUrl('page'),
      JSON.stringify({pagination: this.saFePagination(pagination), others}), this.baseOption);
  }

  /******************************************
   ****************** WRITE *****************
   ******************************************/

  create(entity: T, others?: any): Observable<SkIResponseWrapper<T>> {
    return this.data.httpClient.post<SkIResponseWrapper<T>>(this.getUrl(),
      JSON.stringify({entity, others}), this.baseOption);
  }

  createAndGet(data: { entity: T; pagination: SKIPagination; }, others?: any): Observable<SkIResponseWrapper<T[]>> {
    return this.data.httpClient.post<SkIResponseWrapper<T[]>>(this.getUrl(`create/and-get`),
      JSON.stringify({entity: data.entity, pagination: this.saFePagination(data.pagination), others}), this.baseOption);
  }

  createAll(entities: T[], others?: any): Observable<SkIResponseWrapper<T[]>> {
    return this.data.httpClient.post<SkIResponseWrapper<T[]>>(this.getUrl('save/all'),
      JSON.stringify({entities, others}), this.baseOption);
  }

  /******************************************
   ****************** UPDATE *****************
   ******************************************/

  update(entity: T, id: ID, others?: any): Observable<SkIResponseWrapper<T>> {
    return this.data.httpClient.put<SkIResponseWrapper<T>>(this.getUrl(`update/${id}`),
      JSON.stringify({entity, others}), this.baseOption);
  }

  updateAndGet(data: { entity: T; pagination: SKIPagination; }, id: string | number, others?: any): Observable<SkIResponseWrapper<T[]>> {
    return this.data.httpClient.put<SkIResponseWrapper<T[]>>(this.getUrl(`/update/and-get/${id}`),
      JSON.stringify({entity: data.entity, pagination: this.saFePagination(data.pagination), others}), this.baseOption);
  }

  updateAll(entities: T[], others?: any): Observable<SkIResponseWrapper<T[]>> {
    return this.data.httpClient.post<SkIResponseWrapper<T[]>>(this.getUrl('update/all'),
      JSON.stringify({entities, others}), this.baseOption);
  }


  /******************************************
   ****************** DELETE *****************
   ******************************************/

  delete(id: ID, others?: any): Observable<SkIResponseWrapper<T>> {
    return this.data.httpClient.put<SkIResponseWrapper<T>>(this.getUrl(`delete/${id}`), JSON.stringify(others), this.baseOption);
  }

  deleteAndGet(pagination: SKIPagination, id: string | number, others?: any): Observable<SkIResponseWrapper<T[]>> {
    return this.data.httpClient.put<SkIResponseWrapper<T[]>>(this.getUrl(`delete/and-get/${id}`)
      , JSON.stringify({pagination: this.saFePagination(pagination), others}), this.baseOption);
  }

  deleteAllAndGet(entities: T[], pagination: SKIPagination, others?: any): Observable<SkIResponseWrapper<T[]>> {
    return this.data.httpClient.put<SkIResponseWrapper<T[]>>(this.getUrl('delete-all/and-get'),
      JSON.stringify({pagination: this.saFePagination(pagination), ids: entities.map(value => value.id), others}), this.baseOption);
  }

  deleteAll(entities: T[], others?: any): Observable<SkIResponseWrapper<T[]>> {
    return this.data.httpClient.put<SkIResponseWrapper<T[]>>(this.getUrl('delete/all'),
      JSON.stringify({ids: entities.map(value => value.id), others}), this.baseOption);
  }

  /*********************************************
   ****************** ABSTRACTS ******************
   *********************************************/


  abstract fromJson(response: T | undefined): T | undefined;

  abstract toJson(entity: T | undefined): T | undefined;

  abstract getPath(): string;


  /*********************************************
   ******************* UTILS *******************
   *********************************************/

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

  get baseOption(): HeadersOptions {
    return HttpHelpers.getOptions();
  }

  saFePagination(pagination: SKIPagination): SKIPagination {
    return pagination ?? this.store.selectSnapshot(SKConfigState.selector).pagination;
  }

}
