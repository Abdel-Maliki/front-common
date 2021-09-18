export interface SKIPagination<F extends { [key: string]: any } = any> {
  page: number;
  size: number;
  filters?: F;
  totalElements?: number;
  sort?: string;
  direction?: number;
  globalFilter?: string;
}
