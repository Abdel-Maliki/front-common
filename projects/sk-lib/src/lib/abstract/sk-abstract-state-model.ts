import {SkIActionsError, SkIStateModel} from '@sk-framework/sk-core';
import {SKIPagination} from '@sk-framework/sk-core';

/**
 * @author abdel-maliki
 */
export class SkAbstractStateModel<T, F = any, E extends SkIActionsError = SkIActionsError> implements SkIStateModel<T, F, E> {
  all?: T[] = [];
  entities?: T[] = [];
  entity?: T;
  current?: T;
  errorMessage?: string;
  pagination?: SKIPagination<F>;
  lastCreate?: T;
  lastCreates?: T[] = [];
  lastUpdate?: T;
  lastUpdates?: T[] = [];
  lastDelete?: T;
  lastDeletes?: T[] = [];
  loadEntities?: boolean;
  actionsError?: E;
}


export const SKDefaultState: SkIStateModel<any> = {
  all: [],
  entities: [],
  pagination: undefined,
  lastCreates: [],
  lastUpdates: [],
  lastDeletes: [],
  entity: null,
  current: undefined,
  lastCreate: undefined,
  lastUpdate: undefined,
  lastDelete: undefined,
  loadEntities: true,
  actionsError: {},
};
