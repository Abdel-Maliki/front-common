/**
 * @author abdel-maliki
 */

export class Pagination<T = { [key: string]: any }> {
  constructor(public page: number,
              public size: number,
              public filters?: T,
              public totalElements?: number,
              public sort?: string,
              public direction?: number,
              public globalFilter?: string) {
  }
}
