import {ActionType} from '@ngxs/store/src/actions/symbols';

/**
 * @author abdel-maliki
 * Date : 16/03/2021
 */
export interface StateActions {
  get: ActionType;
  getAll: ActionType;
  pageElements: ActionType;
  create: ActionType;
  update: ActionType;
  delete: ActionType;
  createAndGet: ActionType;
  updateAndGet: ActionType;
  deleteAndGet: ActionType;
  deleteAllAndGet: ActionType;
  resolverFormJob: ActionType;
  saveAll: ActionType;
  updateAll: ActionType;
  deleteAll: ActionType;
  snapshot: ActionType;
  snapshots: ActionType;
  getPath(): string;
}
