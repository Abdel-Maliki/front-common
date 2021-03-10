/**
 * @author abdel-maliki
 */
import {ActionReducerMap} from '@ngrx/store';
import {SkLayoutState} from '../layout/state/layout-types';
import {layoutReducers} from '../layout/state/layout-reducers';
import {allLayoutSelectors} from '../layout/state/layout-selectors';

export interface SKState {
  skLayoutState: SkLayoutState;
}

export const skReducers: ActionReducerMap<SKState> = {
  skLayoutState: layoutReducers,
};

export const layoutSelectors = allLayoutSelectors;

