/**
 * @author abdel-maliki
 */
import {SKIEntity, UpdateLog} from '@sk-framework/sk-core';

export abstract class SkAbstractEntity<T, ID extends string | number = any> implements SKIEntity<T> {
  protected constructor(
    public id?: ID,
    public createdAt?: Date,
    public updateDate?: Date,
    public createdBy?: number,
    public updateLogs?: UpdateLog<T>[]) {
  }

}
