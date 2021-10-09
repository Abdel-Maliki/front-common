import {SkIObjectMapper} from 'sk-core';
import {SkIResponseWrapper} from 'sk-core';
import {ResponseWrapper} from './response-wrapper';
import {SKIPagination, SkIStateModel, SKConfigState} from 'sk-core';
import {Store} from '@ngxs/store';
import {Observable} from 'rxjs';

/**
 * @author abdel-maliki
 */

export class Helpers {
  public static hasRole(roles: string[], role: string): boolean {
    return !!roles && !!role && roles.includes(role);
  }

  public static hasEveryRoles(allRoles: string[], roles: string[]): boolean {
    return roles && roles.every(role => Helpers.hasRole(allRoles, role));
  }

  public static haseSomeRoles(allRoles: string[], roles: string[]): boolean {
    return roles && roles.some(role => Helpers.hasRole(allRoles, role));
  }

  static fromJson<T, RETURN_TYPE extends T | Array<T> = T>(response: any | undefined,
                                                           skObjectMapper: SkIObjectMapper<T>): RETURN_TYPE {
    return ((response instanceof Array)
      ? response.map(value => skObjectMapper.fromJson(value))
      : skObjectMapper.fromJson(response)) as RETURN_TYPE;
  }

  static fromJsonResponseWrapper<T, RETURN_TYPE extends T | Array<T> = T>(
    responseWrapper: SkIResponseWrapper<any>,
    skObjectMapper: SkIObjectMapper<T>): ResponseWrapper<RETURN_TYPE> {
    return new ResponseWrapper<RETURN_TYPE>(
      Helpers.fromJson<T, RETURN_TYPE>(responseWrapper?.data, skObjectMapper),
      responseWrapper.pagination,
      responseWrapper.code,
      responseWrapper.error
    );
  }

  static safePagination<T>(state: SkIStateModel<T>, store: Store): SKIPagination<T> {
    return state.pagination ?? store.selectSnapshot(SKConfigState.paginationSelector);
  }

  static subscribeAndReturnPromise<T>(observable: Observable<T>,
                                      success?: (value: T) => any,
                                      error?: (error: any) => any,
  ): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      observable.toPromise()
        .then(value => {
          if (success) {
            success(value);
          }
          resolve(value);
        })
        .catch(reason => {
          console.log('Class: Helpers, Function: , Line 61 reason(): '
            , reason);
          if (error) {
            error(reason);
          }
          reject(reason);
        });
    });
  }

  public static fail(value: never): void {
    throw new Error('Ce cas n\'a pas encore été géré ,' + value);
  }
}
