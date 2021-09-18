import {Observable} from 'rxjs';
import {ResponseWrapper} from '../classes';
import {SkIObjectMapper} from './sk-i-object-mapper';
import {SKIPagination} from './sk-i-pagination';

/**
 * @author abdel-maliki
 */


export interface ISkService<T, TM = T, ID extends string | number = any> extends SkIObjectMapper<T, TM> {

  /******* READ *********/
  get(id: ID): Observable<ResponseWrapper<TM>>;

  getAll(others?: any): Observable<ResponseWrapper<TM[]>>;

  pageElements(pagination: SKIPagination, others?: any): Observable<ResponseWrapper<TM[]>>;

  /******* WRITE *********/
  create(entity: T, others?: any): Observable<ResponseWrapper<TM>>;

  createAndGet(data: { entity: T, pagination: SKIPagination }, others?: any): Observable<ResponseWrapper<TM[]>>;

  createAll?(entities: T[], others?: any): Observable<ResponseWrapper<TM[]>>;

  /******* UPDATE *********/
  update(entity: T, id: ID, others?: any): Observable<ResponseWrapper<TM>>;

  updateAndGet(data: { entity: T, pagination: SKIPagination }, id: ID, others?: any): Observable<ResponseWrapper<TM[]>>;

  updateAll?(entities: T[], others?: any): Observable<ResponseWrapper<TM[]>>;


  /******* DELETE *********/

  delete(id: ID, ...data: any): Observable<ResponseWrapper<TM>>;

  deleteAndGet(pagination: SKIPagination, id: number | string, others?: any): Observable<ResponseWrapper<TM[]>>;

  deleteAllAndGet?(entities: T[], pagination: SKIPagination, others?: any): Observable<ResponseWrapper<TM[]>>;

  deleteAll?(ids: ID[], others?: any): Observable<ResponseWrapper<TM[]>>;

  /******* OTHERS *********/

  getPath(): string;
}
