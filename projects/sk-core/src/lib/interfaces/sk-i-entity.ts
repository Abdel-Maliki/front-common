import {UpdateLog} from './update-log';
/**
 * @author abdel-maliki
 */
export interface SKIEntity<T> {
  id?: number | string;
  createdAt?: Date;
  updateDate?: Date;
  createdBy?: number;
  updateLogs?: UpdateLog<T>[];
}
