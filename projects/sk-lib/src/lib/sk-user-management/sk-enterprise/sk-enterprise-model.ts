import {SKIEntity, UpdateLog} from 'sk-core';
import {SkAbstractEntity} from '../../abstract';

export class SkEnterpriseModel extends SkAbstractEntity<SkEnterpriseModel> implements SkIEnterprise {
  constructor(public name?: string,
              public tel?: string,
              public description?: string,
              public address?: string,
              public email?: string,
              public id?: any,
              public createdAt?: Date,
              public updateDate?: Date,
              public createdBy?: number,
              public updateLogs?: UpdateLog<SkEnterpriseModel>[]) {
    super(id, createdAt, updateDate, createdBy, updateLogs);
  }

  static fromJson(json: SkIEnterprise | undefined): SkEnterpriseModel | undefined {
    return new SkEnterpriseModel(
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

  static toJson(model: SkEnterpriseModel | undefined): SkIEnterprise | undefined {
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
