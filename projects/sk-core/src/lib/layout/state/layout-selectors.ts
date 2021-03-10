import {createSelector} from '@ngrx/store';
import {BreakpointType, MenuLeftState, SkLayoutState, ToolbarState} from './layout-types';
import {MatDrawerMode} from '@angular/material/sidenav';
import {SKState} from '../../state';

/**
 * @author abdel-maliki
 */

const layoutStateSelector = createSelector<SKState, SKState, SkLayoutState>(
  (state: SKState) => state,
  (s1: SKState) => s1.skLayoutState,
);

const breakpointTypeSelector = createSelector<SKState, SkLayoutState, BreakpointType>(
  layoutStateSelector,
  (s1: SkLayoutState) => s1.breakpointType,
);

const toolBarStateSelector = createSelector<SKState, SkLayoutState, ToolbarState>(
  layoutStateSelector,
  (s1: SkLayoutState) => s1.toolbarState,
);

const menuLeftStateSelector = createSelector<SKState, SkLayoutState, MenuLeftState>(
  layoutStateSelector,
  (s1: SkLayoutState) => s1.menuLeftState,
);

const displayToolbarSelector = createSelector<SKState, ToolbarState, boolean>(
  toolBarStateSelector,
  (s1: ToolbarState) => s1.display,
);

const displayMenuLeftSelector = createSelector<SKState, MenuLeftState, boolean>(
  menuLeftStateSelector,
  (s1: MenuLeftState) => s1.display,
);

const menuLeftModeSelector = createSelector<SKState, MenuLeftState, MatDrawerMode>(
  menuLeftStateSelector,
  (s1: MenuLeftState) => s1.mode,
);

const displayMenuButtonSelector = createSelector<SKState, SkLayoutState, boolean>(
  layoutStateSelector,
  (s1: SkLayoutState) => s1.displayMenuButton,
);

const drawerModeSelector = createSelector<SKState, SkLayoutState, MatDrawerMode>(
  layoutStateSelector,
  (s1: SkLayoutState) => s1.menuLeftState.mode,
);

const hasXSmallSelector = createSelector<SKState, SkLayoutState, boolean>(
  layoutStateSelector,
  (s1: SkLayoutState) => s1.breakpointType === BreakpointType.XSMALL,
);

const hasSmallSelector = createSelector<SKState, SkLayoutState, boolean>(
  layoutStateSelector,
  (s1: SkLayoutState) => s1.breakpointType === BreakpointType.SMALL,
);

const hasMediumSelector = createSelector<SKState, SkLayoutState, boolean>(
  layoutStateSelector,
  (s1: SkLayoutState) => s1.breakpointType === BreakpointType.MEDIUM,
);

const hasLargeSelector = createSelector<SKState, SkLayoutState, boolean>(
  layoutStateSelector,
  (s1: SkLayoutState) => s1.breakpointType === BreakpointType.LARGE,
);

const hasXLargeSelector = createSelector<SKState, SkLayoutState, boolean>(
  layoutStateSelector,
  (s1: SkLayoutState) => s1.breakpointType === BreakpointType.XLARGE,
);



export const allLayoutSelectors = {
  breakpointType: breakpointTypeSelector,
  toolBarState: toolBarStateSelector,
  menuLeftState: menuLeftStateSelector,
  displayToolbar: displayToolbarSelector,
  displayMenuLeft: displayMenuLeftSelector,
  menuLeftMode: menuLeftModeSelector,
  layoutState: layoutStateSelector,
  displayMenuButton: displayMenuButtonSelector,
  drawerMode: drawerModeSelector,
  hasXSmall: hasXSmallSelector,
  hasSmall: hasSmallSelector,
  hasMedium: hasMediumSelector,
  hasLarge: hasLargeSelector,
  hasXLarge: hasXLargeSelector,
};
