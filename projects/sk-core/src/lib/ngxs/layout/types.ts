import {MatDrawerMode} from '@angular/material/sidenav';
import {MenuItem} from 'primeng/api/menuitem';

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
  autoCloseBrother: boolean;
  mode: MatDrawerMode;
  autoFixed: boolean;
  fixedTopGap: number;
  fixedBottomGap: number;
  fixedInViewport: boolean;
  current: MenuItem[];
}

export interface SkLayoutStateModel {
  breakpointType: BreakpointType;
  toolbarState: ToolbarState;
  menuLeftState: MenuLeftState;
  displayMenuButton: boolean;
}
