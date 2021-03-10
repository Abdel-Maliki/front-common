/**
 * @author abdel-maliki
 */
import {BreakpointType, ScreenSizeChangedProps, SkLayoutState} from './layout-types';
import {createReducer, on} from '@ngrx/store';
import {
  screenSizeChangedAction,
  displayMenuLeftAction,
  hideMenuLeftAction,
  displayToolbarAction,
  hideToolbarAction,
  displayMenuButtonAction,
  hideMenuButtonAction,
  sidenavToggleAction
} from './layout-actions';
import {MatDrawerMode} from '@angular/material/sidenav';

const initialState: SkLayoutState = {
  breakpointType: BreakpointType.XLARGE,
  toolbarState: {display: true},
  menuLeftState: {display: true, mode: 'side'},
  displayMenuButton: true,
};

// tslint:disable-next-line:typedef
export function layoutReducers(state: SkLayoutState | undefined, action: any): SkLayoutState {
  return reducers(state, action);
}

export const reducers = createReducer(
  initialState,
  on(screenSizeChangedAction, (state: SkLayoutState, action: ScreenSizeChangedProps) => {
    const mode: MatDrawerMode = action.breakpointType === BreakpointType.XSMALL ? 'over' : 'side';
    const display: boolean = action.breakpointType !== BreakpointType.XSMALL;
    return {
      ...state,
      breakpointType: action.breakpointType,
      menuLeftState: {...state.menuLeftState, mode, display}
    };
  }),
  on(screenSizeChangedAction, (state: SkLayoutState, action: ScreenSizeChangedProps) => {
    return {
      ...state,
      breakpointType: action.breakpointType,
    };
  }),
  on(displayMenuLeftAction, (state: SkLayoutState) => {
    return {
      ...state,
      menuLeftState: {...state.menuLeftState, display: true}
    };
  }),
  on(hideMenuLeftAction, (state: SkLayoutState) => {
    return {
      ...state,
      menuLeftState: {...state.menuLeftState, display: false}
    };
  }),
  on(displayToolbarAction, (state: SkLayoutState) => {
    return {
      ...state,
      toolbarState: {...state.toolbarState, display: true}
    };
  }),
  on(hideToolbarAction, (state: SkLayoutState) => {
    return {
      ...state,
      toolbarState: {...state.toolbarState, display: false}
    };
  }),
  on(displayMenuButtonAction, (state: SkLayoutState) => {
    return {
      ...state,
      displayMenuButton: true,
    };
  }),
  on(hideMenuButtonAction, (state: SkLayoutState) => {
    return {
      ...state,
      displayMenuButton: false,
    };
  }),
  on(sidenavToggleAction, (state: SkLayoutState) => {
    return {
      ...state,
      menuLeftState: {...state.menuLeftState, display: !state.menuLeftState.display}
    };
  }),
);
