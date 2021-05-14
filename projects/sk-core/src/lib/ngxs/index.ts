import {StateClass} from '@ngxs/store/internals';
import {SkLayoutState} from './layout/satate';
import {SkAuthState} from './auth/state';
import {SKConfigState} from './config/state';
import {SkLoadingState} from './loading/state';

/**
 * @author abdel-maliki
 */

export * from './auth/type';
export * from './auth/actions';
export * from './auth/state';

export * from './config/type';
export * from './config/actions';
export * from './config/state';

export * from './layout/types';
export * from './layout/actions';
export * from './layout/satate';

export * from './loading/types';
export * from './loading/actions';
export * from './loading/state';


export const skStates: StateClass[] = [
  SkAuthState,
  SKConfigState,
  SkLayoutState,
  SkLoadingState
];
