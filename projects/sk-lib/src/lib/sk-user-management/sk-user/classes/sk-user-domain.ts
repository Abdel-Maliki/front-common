import {SkAbstractEntity} from '../../../abstract';
import {SKIEntity, UpdateLog} from 'sk-core';
import {SkIProfileDomain} from '../../sk-profile/classes/sk-profile-domain';

/**
 * @author abdel-maliki
 */

export class SkUserDomain extends SkAbstractEntity<SkUserDomain> implements SkIUserDomain {
  constructor(public email?: string,
              public name?: string,
              public password?: string,
              public userName?: string,
              public profile?: SkIProfileDomain,
              public status?: UserState,
              public activatedDate?: Date,
              public deactivatedDate?: Date,
              public blockedDate?: Date,
              public id?: any,
              public createdAt?: Date,
              public updateDate?: Date,
              public createdBy?: number,
              public updateLogs?: UpdateLog<SkUserDomain>[]
  ) {
    super(id, createdAt, updateDate, createdBy, updateLogs);
    if (!status) {
      this.status = UserState.ACTIVE;
    }
  }


  static fromJson(json: SkIUserDomain | undefined): SkUserDomain | undefined {
    return new SkUserDomain(
      json?.email,
      json?.name,
      json?.password,
      json?.userName,
      json?.profile,
      json?.status,
      json?.activatedDate,
      json?.deactivatedDate,
      json?.blockedDate,
      json?.id,
      json?.createdAt,
      json?.updateDate,
      json?.createdBy,
      json?.updateLogs
    );
  }

  static toJson(model: SkIUserDomain | undefined): SkIUserDomain | undefined {
    return model;
  }
}


export interface SkIUserDomain extends SKIEntity<SkIUserDomain> {
  email?: string;
  name?: string;
  password?: string;
  userName?: string;
  profile?: SkIProfileDomain;
  status?: UserState;
  activatedDate?: Date;
  deactivatedDate?: Date;
  blockedDate?: Date;
}


export enum UserState {
  ACTIVE = 'ACTIVE',
  DESACTIVE = 'DESACTIVE',
  BLOQUE = 'BLOQUE',
}
