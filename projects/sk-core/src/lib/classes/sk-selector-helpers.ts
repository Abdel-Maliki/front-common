import {SkAbstractStateModel} from '../abstract';
import {SkAbstractEntity} from '../abstract';
import {SKIPagination} from '../interfaces';

export class SKSelectorHelpers {

  static allSelector<T extends SkAbstractEntity<T>, S extends SkAbstractStateModel<T>>(state: S): T[] {
    return state.all ?? [];
  }

  static entitiesSelector<T extends SkAbstractEntity<T>, S extends SkAbstractStateModel<T>>(state: S): T[] {
    return state.entities ?? [];
  }

  static loaderSelector<T extends SkAbstractEntity<T>, S extends SkAbstractStateModel<T>>(state: S): boolean {
    return state.loader ?? false;
  }

  static pageSelector<T extends SkAbstractEntity<T>, S extends SkAbstractStateModel<T>>(state: S): number {
    return state.page ?? 0;
  }

  static sizeSelector<T extends SkAbstractEntity<T>, S extends SkAbstractStateModel<T>>(state: S): number {
    return state.size ?? 0;
  }

  static filtersSelector<T extends SkAbstractEntity<T>, S extends SkAbstractStateModel<T>>(state: S): object {
    return state.filters ?? {};
  }

  static totalElementsSelector<T extends SkAbstractEntity<T>, S extends SkAbstractStateModel<T>>(state: S): number {
    return state.totalElements ?? 0;
  }

  static lastCreatesSelector<T extends SkAbstractEntity<T>, S extends SkAbstractStateModel<T>>(state: S): T[] {
    return state.lastCreates ?? [];
  }

  static lastUpdatesSelector<T extends SkAbstractEntity<T>, S extends SkAbstractStateModel<T>>(state: S): T[] {
    return state.lastUpdates ?? [];
  }

  static lastDeletesSelector<T extends SkAbstractEntity<T>, S extends SkAbstractStateModel<T>>(state: S): T[] {
    return state.lastDeletes ?? [];
  }

  static entitySelector<T extends SkAbstractEntity<T>, S extends SkAbstractStateModel<T>>(state: S): T | undefined {
    return state.entity;
  }

  static errorSelector<T extends SkAbstractEntity<T>, S extends SkAbstractStateModel<T>>(state: S): T | undefined {
    return state.error;
  }

  static currentSelector<T extends SkAbstractEntity<T>, S extends SkAbstractStateModel<T>>(state: S): T | undefined {
    return state.current;
  }

  static errorMessageSelector<T extends SkAbstractEntity<T>, S extends SkAbstractStateModel<T>>(state: S): string | undefined {
    return state.errorMessage;
  }

  static sortSelector<T extends SkAbstractEntity<T>, S extends SkAbstractStateModel<T>>(state: S): string | undefined {
    return state.sort;
  }

  static directionSelector<T extends SkAbstractEntity<T>, S extends SkAbstractStateModel<T>>(state: S): number {
    return state.direction ?? 1;
  }

  static globalFilterSelector<T extends SkAbstractEntity<T>, S extends SkAbstractStateModel<T>>(state: S): string | undefined {
    return state.globalFilter;
  }

  static lastCreateSelector<T extends SkAbstractEntity<T>, S extends SkAbstractStateModel<T>>(state: S): T | undefined {
    return state.lastCreate;
  }

  static lastUpdateSelector<T extends SkAbstractEntity<T>, S extends SkAbstractStateModel<T>>(state: S): T | undefined {
    return state.lastUpdate;
  }

  static lastDeleteSelector<T extends SkAbstractEntity<T>, S extends SkAbstractStateModel<T>>(state: S): T | undefined {
    return state.lastDelete;
  }

  static paginationSelector<T extends SkAbstractEntity<T>,
    S extends SkAbstractStateModel<T, F>,
    F extends { [key: string]: any } = any>(state: S, defaultPagination: SKIPagination<F>): SKIPagination<F> {
    return {
      page: state.page ?? defaultPagination.page,
      size: state.size ?? defaultPagination.size,
      filters: state.filters ?? defaultPagination.filters,
      globalFilter: state.globalFilter ?? defaultPagination.globalFilter,
      sort: state.globalFilter ?? defaultPagination.sort,
      direction: state.direction ?? defaultPagination.direction,
      totalElements: state.totalElements ?? defaultPagination.totalElements,
    };
  }
}
