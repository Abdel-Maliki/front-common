import {Observable} from 'rxjs';
import {SkIResponseWrapper} from '../interfaces';
import {SkIObjectMapper} from './sk-i-object-mapper';
import {SKIPagination} from './sk-i-pagination';

/**
 * @author abdel-maliki
 */


export interface ISkService<T, ID extends string | number = any> extends SkIObjectMapper<T> {

  /******* READ *********/
  get(id: ID): Observable<SkIResponseWrapper<T>>;

  getAll(others?: any): Observable<SkIResponseWrapper<T[]>>;

  pageElements(pagination: SKIPagination, others?: any): Observable<SkIResponseWrapper<T[]>>;

  /******* WRITE *********/
  create(entity: T, others?: any): Observable<SkIResponseWrapper<T>>;

  createAndGet(data: { entity: T, pagination: SKIPagination }, others?: any): Observable<SkIResponseWrapper<T[]>>;

  createAll?(entities: T[], others?: any): Observable<SkIResponseWrapper<T[]>>;

  /******* UPDATE *********/
  update(entity: T, id: ID, others?: any): Observable<SkIResponseWrapper<T>>;

  updateAndGet(data: { entity: T, pagination: SKIPagination }, id: ID, others?: any): Observable<SkIResponseWrapper<T[]>>;

  updateAll?(entities: T[], others?: any): Observable<SkIResponseWrapper<T[]>>;


  /******* DELETE *********/

  delete(id: ID, ...data: any): Observable<SkIResponseWrapper<T>>;

  deleteAndGet(pagination: SKIPagination, id: number | string, others?: any): Observable<SkIResponseWrapper<T[]>>;

  deleteAllAndGet?(entities: T[], pagination: SKIPagination, others?: any): Observable<SkIResponseWrapper<T[]>>;

  deleteAll?(ids: ID[], others?: any): Observable<SkIResponseWrapper<T[]>>;

  /******* OTHERS *********/

  getPath(): string;
}
