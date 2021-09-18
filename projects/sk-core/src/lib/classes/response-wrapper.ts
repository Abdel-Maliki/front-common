import {Helpers} from './helpers';
import {SkIObjectMapper, SKIPagination} from '../interfaces';

/**
 * @author abdel-maliki
 */

export class ResponseWrapper<T, F extends { [key: string]: any } = any> {

  constructor(public data?: T,
              public pagination?: SKIPagination<F>,
              public code = 200,
              public error?: { message: string, full?: any }) {
  }

  static ko<T>(error: { message: string, full?: any }, status = 400): ResponseWrapper<T> {
    return new ResponseWrapper<T>(undefined, undefined, status, error);
  }

  static ok<T>(message: string, status = 200): ResponseWrapper<T> {
    return new ResponseWrapper<T>(undefined, undefined, status, {message});
  }

  static fromJson<T, RETURN_TYPE extends T | Array<T> = T, R = any>(responseWrapper: ResponseWrapper<R| Array<R>>,
                                                                    skObjectMapper: SkIObjectMapper<T, R>): ResponseWrapper<RETURN_TYPE> {
    return new ResponseWrapper<RETURN_TYPE>(
      Helpers.fromJson<T, RETURN_TYPE, R>(responseWrapper?.data, skObjectMapper),
      responseWrapper.pagination,
      responseWrapper.code,
      responseWrapper.error
    );
  }

  get isValid(): boolean {
    return !!this.code && this.code >= 200 && this.code < 400;
  }

  get isNotValid(): boolean {
    return !this.isValid;
  }
}
