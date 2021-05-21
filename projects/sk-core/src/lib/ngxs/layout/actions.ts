import {ScreenSizeChangedProps} from './types';
import {MenuItem} from 'primeng/api/menuitem';

/**
 * @author abdel-maliki
 */


export class ScreenSizeChangedAction {
  static readonly type = '[Layout] Screen Size Changed';

  constructor(public payload: ScreenSizeChangedProps) {
  }
}

export class DisplayToolbarAction {
  static readonly type = '[Layout] Display toolbar';
}

export class HideToolbarAction {
  static readonly type = '[Layout] Hide toolbar';
}

export class DisplayMenuLeftAction {
  static readonly type = '[Layout] Display menu left';
}

export class HideMenuLeftAction {
  static readonly type = '[Layout] Hide menu left';
}

export class SidenavToggleAction {
  static readonly type = '[Layout] Sidenav toggle';
}

export class DisplayMenuButtonAction {
  static readonly type = '[Layout] Display menu button';
}

export class HideMenuButtonAction {
  static readonly type = '[Layout] Hide menu button';
}

export class UpdateAutoCloseMenuLeftBrother {
  static readonly type = '[Layout] Update Auto Close MenuLeft Brother';

  constructor(public autoCloseBrother: boolean) {
  }
}

export class CurrentMenuLeftItem {
  static readonly type = '[Layout] Current menu left iTem';

  constructor(public current: MenuItem[]) {
  }
}


export class FixedMenuLeftAction {
  static readonly type = '[Layout] Fixed menu left';

  constructor(public fixedInViewport: boolean,
              public autoFixed: boolean,
              public fixedBottomGap?: number,
              public fixedTopGap: number = 56) {
  }
}







