import {SKIEntity, UpdateLog} from '@sk-framework/sk-core';
import {SkAbstractEntity} from '../../../abstract';

export class SkEnterpriseDomain extends SkAbstractEntity<SkEnterpriseDomain> implements SkIEnterprise {
  constructor(public name?: string,
              public tel?: string,
              public description?: string,
              public address?: string,
              public email?: string,
              public id?: any,
              public createdAt?: Date,
              public updateDate?: Date,
              public createdBy?: number,
              public updateLogs?: UpdateLog<SkEnterpriseDomain>[]) {
    super(id, createdAt, updateDate, createdBy, updateLogs);
  }

  static fromJson(json: SkIEnterprise | undefined): SkEnterpriseDomain | undefined {
    return new SkEnterpriseDomain(
      json?.name,
      json?.tel,
      json?.description,
      json?.address,
      json?.email,
      json?.id,
      json?.createdAt,
      json?.updateDate,
      json?.createdBy,
      json?.updateLogs
    );
  }

  static toJson(model: SkEnterpriseDomain | undefined): SkIEnterprise | undefined {
    return model;
  }
}


export interface SkIEnterprise extends SKIEntity<SkIEnterprise> {
  name?: string;
  tel?: string;
  description?: string;
  address?: string;
  email?: string;
}
