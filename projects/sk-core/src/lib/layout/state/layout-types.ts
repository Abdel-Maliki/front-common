import {MatDrawerMode} from '@angular/material/sidenav';

export enum BreakpointType {
  XSMALL = 'XSMALL',
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
  XLARGE = 'XLARGE',
}

export enum LayoutAction {
  SCREEN_SIZE_CHANGED = '[Layout] Screen Size Changed',
  DISPLAY_TOOLBAR = '[Layout] Display toolbar',
  HIDE_TOOLBAR = '[Layout] Hide toolbar',
  DISPLAY_MENU_LEFT = '[Layout] Display menu left',
  HIDE_MENU_LEFT = '[Layout] Hide menu left',
  SIDENAV_TOGGLE = '[Layout] Sidenav toggle',
  DISPLAY_MENU_BUTTON = '[Layout] Display menu button',
  HIDE_MENU_BUTTON = '[Layout] Hide menu button',
}

export interface ScreenSizeChangedProps {
  breakpointType: BreakpointType;
}

export interface ToolbarState {
  display: boolean;
}

export interface MenuLeftState {
  display: boolean;
  mode: MatDrawerMode;
}

export interface SkLayoutState {
  breakpointType: BreakpointType;
  toolbarState: ToolbarState;
  menuLeftState: MenuLeftState;
  displayMenuButton: boolean;
}
