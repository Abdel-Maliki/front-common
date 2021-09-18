import {SkAbstractEntity} from '../abstract';
import {SKIPagination} from './sk-i-pagination';

export interface SKGetAction<ID extends string | number = any> {
  payload: ID;
}

export interface SkGetAllAction<A = any> {
  payload?: A;
}

export interface SKPageAction<T extends SkAbstractEntity<T, ID>, ID extends string | number = any> {
  payload: { pagination: SKIPagination, others?: any };
}


export interface SKCreateAction<T extends SkAbstractEntity<T, ID>, ID extends string | number = any> {
  payload: { entity: T, others?: any };
}

export interface SKCreateAndGetAction<T extends SkAbstractEntity<T, ID>, ID extends string | number = any> {
  payload: { entity: T, pagination: SKIPagination, others?: any };
}

export interface SKCreateAllAction<T extends SkAbstractEntity<T, ID>, ID extends string | number = any> {
  payload: { entities: T[], others?: any };
}

export interface SKUpdateAction<T extends SkAbstractEntity<T, ID>, ID extends string | number = any> {
  payload: { entity: T, id: ID, others?: any };
}

export interface SKUpdateAndGetAction<T extends SkAbstractEntity<T, ID>, ID extends string | number = any> {
  payload: { entity: T, pagination: SKIPagination, id: ID, others?: any };
}

export interface SKUpdateAllAction<T extends SkAbstractEntity<T, ID>, ID extends string | number = any> {
  payload: { entities: T[], others?: any };
}


export interface SKDeleteAction<T extends SkAbstractEntity<T, ID>, ID extends string | number = any> {
  payload: { id: ID, others?: any };
}


export interface SKDeleteAndGetAction<T extends SkAbstractEntity<T, ID>, ID extends string | number = any> {
  payload: { pagination: SKIPagination, id: ID, others?: any };
}


export interface SKDeleteAllAndGetAction<T extends SkAbstractEntity<T, ID>, ID extends string | number = any> {
  payload: { entities: T[], pagination: SKIPagination, others?: any };
}

export interface SKDeleteAllAction<T extends SkAbstractEntity<T, ID>, ID extends string | number = any> {
  payload: { entities: T[], others?: any };
}
























