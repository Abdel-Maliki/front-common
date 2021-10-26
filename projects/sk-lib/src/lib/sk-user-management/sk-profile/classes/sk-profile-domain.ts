import {SkAbstractEntity} from '../../../abstract';
import {SKIEntity, UpdateLog} from '@sk-framework/sk-core';

/**
 * @author abdel-maliki
 */

export class SkProfileDomain extends SkAbstractEntity<SkProfileDomain> implements SkIProfileDomain {
  constructor(public name?: string,
              public description?: string,
              public id?: any,
              public createdAt?: Date,
              public updateDate?: Date,
              public createdBy?: number,
              public updateLogs?: UpdateLog<SkProfileDomain>[]
  ) {
    super(id, createdAt, updateDate, createdBy, updateLogs);
  }


  static fromJson(json: SkProfileDomain | undefined): SkProfileDomain | undefined {
    return new SkProfileDomain(
      json?.name,
      json?.description,
      json?.id,
      json?.createdAt,
      json?.updateDate,
      json?.createdBy,
      json?.updateLogs
    );
  }

  static toJson(model: SkProfileDomain | undefined): SkProfileDomain | undefined {
    return model;
  }
}


export interface SkIProfileDomain extends SKIEntity<SkIProfileDomain> {
  name?: string;
  description?: string;
}
