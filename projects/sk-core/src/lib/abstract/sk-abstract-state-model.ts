/**
 * @author abdel-maliki
 */
export abstract class SkAbstractStateModel<T, F = { [key: string]: any }> {
  all?: T[] = [];
  entities?: T[] = [];
  entity?: T;
  loader?: boolean;
  error?: any;
  current?: T;
  errorMessage?: string;
  page?: number;
  size?: number;
  filters?: F;
  totalElements?: number;
  sort?: string;
  direction?: number;
  globalFilter?: string;
  lastCreate?: T;
  lastCreates?: T[] = [];
  lastUpdate?: T;
  lastUpdates?: T[] = [];
  lastDelete?: T;
  lastDeletes?: T[] = [];
}



export const SKDefaultState: SkAbstractStateModel<any, any> = {
  all: [],
  entities: [],
  loader: false,
  page: 0,
  size: 10,
  filters: {},
  totalElements: 0,
  lastCreates: [],
  lastUpdates: [],
  lastDeletes: [],
  entity: null,
  error: undefined,
  current: undefined,
  errorMessage: undefined,
  sort: 'asc',
  direction: 1,
  globalFilter: undefined,
  lastCreate: undefined,
  lastUpdate: undefined,
  lastDelete: undefined,
};
