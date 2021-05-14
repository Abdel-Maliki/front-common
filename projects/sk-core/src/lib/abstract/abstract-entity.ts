/**
 * @author abdel-maliki
 */
import {ISKEntity} from '../interfaces/entity';
import {UpdateLog} from '../utils/update-log';

export abstract class AbstractEntity<T,  ID extends string | number = any> implements ISKEntity {
  public static readonly baseRoute: string;
  id?: ID;
  createdAt?: Date;
  updateDate?: Date;
  createdBy?: number;
  updateLogs?: UpdateLog[];
}
