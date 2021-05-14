import {UpdateLog} from '../utils/update-log';

/**
 * @author abdel-maliki
 */
export interface ISKEntity {
  id?: number | string;
  createdAt?: Date;
  updateDate?: Date;
  createdBy?: number;
  updateLogs?: UpdateLog[];
}
