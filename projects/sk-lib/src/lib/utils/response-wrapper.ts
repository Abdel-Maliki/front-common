import {SKIPagination} from 'sk-core';
import {SkIResponseWrapper} from 'sk-core';

/**
 * @author abdel-maliki
 */

export class ResponseWrapper<T, F extends { [key: string]: any } = any> implements SkIResponseWrapper<T, F> {

  constructor(public data?: T,
              public pagination?: SKIPagination<F>,
              public code = 200,
              public error?: { message: string, full?: any }) {
  }

  static ko<T>(error: { message: string, full?: any }, status = 400): ResponseWrapper<T> {
    return new ResponseWrapper<T>(undefined, undefined, status, error);
  }

  static ok<T>(data?: T, message?: string, status = 200): ResponseWrapper<T> {
    return new ResponseWrapper<T>(data, undefined, status);
  }

  isValid(): boolean {
    return !!this.code && this.code >= 200 && this.code < 400;
  }

  isNotValid(): boolean {
    return !this.isValid();
  }
}
