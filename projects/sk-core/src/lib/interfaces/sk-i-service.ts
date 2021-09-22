import {Observable} from 'rxjs';
import {ResponseWrapper} from '../classes';
import {SkIObjectMapper} from './sk-i-object-mapper';
import {SKIPagination} from './sk-i-pagination';

/**
 * @author abdel-maliki
 */


export interface ISkService<T, ID extends string | number = any> extends SkIObjectMapper<T> {

  /******* READ *********/
  get(id: ID): Observable<ResponseWrapper<T>>;

  getAll(others?: any): Observable<ResponseWrapper<T[]>>;

  pageElements(pagination: SKIPagination, others?: any): Observable<ResponseWrapper<T[]>>;

  /******* WRITE *********/
  create(entity: T, others?: any): Observable<ResponseWrapper<T>>;

  createAndGet(data: { entity: T, pagination: SKIPagination }, others?: any): Observable<ResponseWrapper<T[]>>;

  createAll?(entities: T[], others?: any): Observable<ResponseWrapper<T[]>>;

  /******* UPDATE *********/
  update(entity: T, id: ID, others?: any): Observable<ResponseWrapper<T>>;

  updateAndGet(data: { entity: T, pagination: SKIPagination }, id: ID, others?: any): Observable<ResponseWrapper<T[]>>;

  updateAll?(entities: T[], others?: any): Observable<ResponseWrapper<T[]>>;


  /******* DELETE *********/

  delete(id: ID, ...data: any): Observable<ResponseWrapper<T>>;

  deleteAndGet(pagination: SKIPagination, id: number | string, others?: any): Observable<ResponseWrapper<T[]>>;

  deleteAllAndGet?(entities: T[], pagination: SKIPagination, others?: any): Observable<ResponseWrapper<T[]>>;

  deleteAll?(ids: ID[], others?: any): Observable<ResponseWrapper<T[]>>;

  /******* OTHERS *********/

  getPath(): string;
}
