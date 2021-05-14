/**
 * @author abdel-maliki
 */
export interface ISKEntityState<T, F = { [key: string]: any }> {
  all?: T[];
  entities?: T[];
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
  lastCreates?: T[];
  lastUpdate?: T;
  lastUpdates?: T[];
  lastDelete?: T;
  lastDeletes?: T[];
}
