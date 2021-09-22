import {UpdateLog} from './update-log';

/**
 * @author abdel-maliki
 */
export interface SKIEntity<T, ID extends string | number = any> {
  id?: ID;
  createdAt?: Date;
  updateDate?: Date;
  createdBy?: number;
  updateLogs?: UpdateLog<T>[];
}
