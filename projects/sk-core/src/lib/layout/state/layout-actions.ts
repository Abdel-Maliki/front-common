import {LayoutAction, ScreenSizeChangedProps} from './layout-types';
import {createAction, props} from '@ngrx/store';

/**
 * @author abdel-maliki
 */


// tslint:disable-next-line:max-line-length
export const screenSizeChangedAction = createAction<LayoutAction.SCREEN_SIZE_CHANGED, ScreenSizeChangedProps>(LayoutAction.SCREEN_SIZE_CHANGED, props<ScreenSizeChangedProps>());
export const displayToolbarAction = createAction<LayoutAction.DISPLAY_TOOLBAR>(LayoutAction.DISPLAY_TOOLBAR);
export const hideToolbarAction = createAction<LayoutAction.HIDE_TOOLBAR>(LayoutAction.HIDE_TOOLBAR);
export const displayMenuLeftAction = createAction<LayoutAction.DISPLAY_MENU_LEFT>(LayoutAction.DISPLAY_MENU_LEFT);
export const hideMenuLeftAction = createAction<LayoutAction.HIDE_MENU_LEFT>(LayoutAction.HIDE_MENU_LEFT);
export const sidenavToggleAction = createAction<LayoutAction.SIDENAV_TOGGLE>(LayoutAction.SIDENAV_TOGGLE);
export const displayMenuButtonAction = createAction<LayoutAction.DISPLAY_MENU_BUTTON>(LayoutAction.DISPLAY_MENU_BUTTON);
export const hideMenuButtonAction = createAction<LayoutAction.HIDE_MENU_BUTTON>(LayoutAction.HIDE_MENU_BUTTON);
