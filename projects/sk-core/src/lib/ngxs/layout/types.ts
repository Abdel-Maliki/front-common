import {MatDrawerMode} from '@angular/material/sidenav';

export enum BreakpointType {
  XSMALL = 'XSMALL',
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
  XLARGE = 'XLARGE',
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
  autoFixed: boolean;
  fixedTopGap: number;
  fixedBottomGap: number;
  fixedInViewport: boolean;
}

export interface SkLayoutStateModel {
  breakpointType: BreakpointType;
  toolbarState: ToolbarState;
  menuLeftState: MenuLeftState;
  displayMenuButton: boolean;
}
