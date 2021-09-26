import {SKIPagination} from './sk-i-pagination';

/**
 * @author abdel-maliki
 */


export interface SkIResponseWrapper<T, F extends { [key: string]: any } = any> {
  data?: T;
  pagination?: SKIPagination<F>;
  code: number;
  error?: any;

  isValid(): boolean;

  isNotValid(): boolean;
}
