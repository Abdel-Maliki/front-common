import {SKIPagination} from 'sk-core';

/**
 * @author abdel-maliki
 */

export class Pagination<F extends { [key: string]: any } = any> implements SKIPagination<F> {
  constructor(public page: number,
              public size: number,
              public filters?: F,
              public totalElements?: number,
              public sort?: string,
              public direction?: number,
              public globalFilter?: string) {
  }
}
