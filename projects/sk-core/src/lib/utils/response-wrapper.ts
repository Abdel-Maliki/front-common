import {Pagination} from './pagination';

/**
 * @author abdel-maliki
 */

export class ResponseWrapper<T> {

  constructor(public data?: T,
              public pagination?: Pagination,
              public code = 200,
              public error?: { message: string, full?: any }) {
  }

  static ko<T>(error: { message: string, full?: any }, status = 400): ResponseWrapper<T> {
    return new ResponseWrapper<T>(undefined, undefined, status, error);
  }

  static ok<T>(message: string, status = 200): ResponseWrapper<T> {
    return new ResponseWrapper<T>(undefined, undefined, status, {message});
  }

  get isValid(): boolean {
    return !!this.code && this.code >= 200 && this.code < 400;
  }

  get isNotValid(): boolean {
    return !this.isValid;
  }
}
