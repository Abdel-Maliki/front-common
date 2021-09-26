import {SkIActionsError, SKIEntity, SKIPagination, SkIStateModel} from 'sk-core';

export class SKSelectorHelpers {

  static allSelector<T extends SKIEntity<T>, S extends SkIStateModel<T>>(state: S): T[] {
    return state.all ?? [];
  }

  static entitiesSelector<T extends SKIEntity<T>, S extends SkIStateModel<T>>(state: S): T[] {
    return state.entities ?? [];
  }

  static lastCreatesSelector<T extends SKIEntity<T>, S extends SkIStateModel<T>>(state: S): T[] {
    return state.lastCreates ?? [];
  }

  static lastUpdatesSelector<T extends SKIEntity<T>, S extends SkIStateModel<T>>(state: S): T[] {
    return state.lastUpdates ?? [];
  }

  static lastDeletesSelector<T extends SKIEntity<T>, S extends SkIStateModel<T>>(state: S): T[] {
    return state.lastDeletes ?? [];
  }

  static entitySelector<T extends SKIEntity<T>, S extends SkIStateModel<T>>(state: S): T | undefined {
    return state.entity;
  }

  static actionsErrorSelector<T extends SKIEntity<T>, S extends SkIStateModel<T>>(state: S): SkIActionsError | undefined {
    return state.actionsError;
  }

  static currentSelector<T extends SKIEntity<T>, S extends SkIStateModel<T>>(state: S): T | undefined {
    return state.current;
  }

  static lastCreateSelector<T extends SKIEntity<T>, S extends SkIStateModel<T>>(state: S): T | undefined {
    return state.lastCreate;
  }

  static lastUpdateSelector<T extends SKIEntity<T>, S extends SkIStateModel<T>>(state: S): T | undefined {
    return state.lastUpdate;
  }

  static lastDeleteSelector<T extends SKIEntity<T>, S extends SkIStateModel<T>>(state: S): T | undefined {
    return state.lastDelete;
  }

  static loadEntitiesSelector<T extends SKIEntity<T>, S extends SkIStateModel<T>>(state: S): boolean {
    return state?.loadEntities ?? true;
  }

  static selector<T extends SKIEntity<T>, S extends SkIStateModel<T>>(state: S): S {
    return state;
  }

  static paginationSelector<T extends SKIEntity<T>, S extends SkIStateModel<T, F>, F extends { [key: string]: any } = any>(state: S)
    : SKIPagination<F> | undefined {
    return state.pagination;
  }
}
