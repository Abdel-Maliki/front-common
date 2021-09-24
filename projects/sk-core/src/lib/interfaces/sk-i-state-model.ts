/**
 * @author abdel-maliki
 */
import {SKIPagination} from './sk-i-pagination';

export interface SkIStateModel<T, F = any, E extends SkIActionsError = SkIActionsError> {
  all?: T[];
  entities?: T[];
  entity?: T;
  current?: T;
  pagination?: SKIPagination<F>;
  lastCreate?: T;
  lastCreates?: T[];
  lastUpdate?: T;
  lastUpdates?: T[];
  lastDelete?: T;
  lastDeletes?: T[];
  loadEntities?: boolean;
  actionsError?: E;
}

export interface SkIActionsError {
  get?: SkIActionError;
  getAll?: SkIActionError;
  page?: SkIActionError;
  create?: SkIActionError;
  createAndGet?: SkIActionError;
  createAll?: SkIActionError;
  update?: SkIActionError;
  updateAndGet?: SkIActionError;
  updateAll?: SkIActionError;
  delete?: SkIActionError;
  deleteAndGet?: SkIActionError;
  deleteAll?: SkIActionError;
  deleteAllAndGet?: SkIActionError;
}

export interface SkIActionError {
  exist: boolean;
  error: any;
}
