/**
 * @author abdel-maliki
 */
import {BreakpointType, MenuLeftState, SkLayoutStateModel, ToolbarState} from './types';
import {
  ScreenSizeChangedAction,
  DisplayMenuLeftAction,
  HideMenuLeftAction,
  DisplayToolbarAction,
  HideToolbarAction,
  DisplayMenuButtonAction, HideMenuButtonAction, SidenavToggleAction
} from './actions';
import {MatDrawerMode} from '@angular/material/sidenav';
import {Action, NgxsOnInit, Selector, State, StateContext, StateToken, Store} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';


export const SK_LAYOUT_STATE_TOKEN = new StateToken<SkLayoutStateModel>('skLayoutState');

@State({
  name: SK_LAYOUT_STATE_TOKEN,
  defaults: {
    breakpointType: BreakpointType.XLARGE,
    toolbarState: {display: true},
    menuLeftState: {display: true, mode: 'side'},
    displayMenuButton: true,
  }
})
@Injectable()
export class SkLayoutState implements NgxsOnInit {
  constructor(private breakpointObserver: BreakpointObserver, private store: Store) {
  }

  @Selector([SK_LAYOUT_STATE_TOKEN])
  static breakpointTypeSelector(state: SkLayoutStateModel): BreakpointType {
    return state.breakpointType;
  }

  @Selector([SK_LAYOUT_STATE_TOKEN])
  static toolBarStateSelector(state: SkLayoutStateModel): ToolbarState {
    return state.toolbarState;
  }

  @Selector([SK_LAYOUT_STATE_TOKEN])
  static menuLeftStateSelector(state: SkLayoutStateModel): MenuLeftState {
    return state.menuLeftState;
  }

  @Selector([SK_LAYOUT_STATE_TOKEN])
  static displayToolbarSelector(state: SkLayoutStateModel): boolean {
    return state.toolbarState.display;
  }

  @Selector([SK_LAYOUT_STATE_TOKEN])
  static displayMenuLeftSelector(state: SkLayoutStateModel): boolean {
    return state.menuLeftState.display;
  }

  @Selector([SK_LAYOUT_STATE_TOKEN])
  static displayMenuButtonSelector(state: SkLayoutStateModel): boolean {
    return state.displayMenuButton;
  }

  @Selector([SK_LAYOUT_STATE_TOKEN])
  static drawerModeSelector(state: SkLayoutStateModel): MatDrawerMode {
    return state.menuLeftState.mode;
  }

  @Selector([SK_LAYOUT_STATE_TOKEN])
  static hasXSmallSelector(state: SkLayoutStateModel): boolean {
    return state.breakpointType === BreakpointType.XSMALL;
  }

  @Selector([SK_LAYOUT_STATE_TOKEN])
  static hasSmallSelector(state: SkLayoutStateModel): boolean {
    return state.breakpointType === BreakpointType.SMALL;
  }

  @Selector([SK_LAYOUT_STATE_TOKEN])
  static hasMediumSelector(state: SkLayoutStateModel): boolean {
    return state.breakpointType === BreakpointType.MEDIUM;
  }

  @Selector([SK_LAYOUT_STATE_TOKEN])
  static hasLargeSelector(state: SkLayoutStateModel): boolean {
    return state.breakpointType === BreakpointType.LARGE;
  }

  @Selector([SK_LAYOUT_STATE_TOKEN])
  static hasXLargeSelector(state: SkLayoutStateModel): boolean {
    return state.breakpointType === BreakpointType.XLARGE;
  }


  @Action(ScreenSizeChangedAction)
  screenSizeChanged(ctx: StateContext<SkLayoutStateModel>, action: ScreenSizeChangedAction): void {
    const state = ctx.getState();
    const mode: MatDrawerMode = action.payload.breakpointType === BreakpointType.XSMALL ? 'over' : 'side';
    const display: boolean = action.payload.breakpointType !== BreakpointType.XSMALL;
    ctx.patchState({
      breakpointType: action.payload.breakpointType,
      menuLeftState: {...state.menuLeftState, mode, display}
    });
  }

  @Action(DisplayMenuLeftAction)
  displayMenuLeftAction(ctx: StateContext<SkLayoutStateModel>): void {
    const state = ctx.getState();
    ctx.patchState({
      menuLeftState: {...state.menuLeftState, display: true}
    });
  }

  @Action(HideMenuLeftAction)
  hideMenuLeftAction(ctx: StateContext<SkLayoutStateModel>): void {
    const state = ctx.getState();
    ctx.patchState({
      menuLeftState: {...state.menuLeftState, display: false}
    });
  }

  @Action(DisplayToolbarAction)
  displayToolbarAction(ctx: StateContext<SkLayoutStateModel>): void {
    const state = ctx.getState();
    ctx.patchState({
      toolbarState: {...state.toolbarState, display: true}
    });
  }

  @Action(HideToolbarAction)
  hideToolbarAction(ctx: StateContext<SkLayoutStateModel>): void {
    const state = ctx.getState();
    ctx.patchState({
      toolbarState: {...state.toolbarState, display: false}
    });
  }

  @Action(DisplayMenuButtonAction)
  displayMenuButtonAction(ctx: StateContext<SkLayoutStateModel>): void {
    ctx.patchState({
      displayMenuButton: true,
    });
  }

  @Action(HideMenuButtonAction)
  hideMenuButtonAction(ctx: StateContext<SkLayoutStateModel>): void {
    ctx.patchState({
      displayMenuButton: false,
    });
  }

  @Action(SidenavToggleAction)
  sidenavToggleAction(ctx: StateContext<SkLayoutStateModel>): void {
    const state = ctx.getState();
    ctx.patchState({
      menuLeftState: {...state.menuLeftState, display: !state.menuLeftState.display}
    });
  }

  ngxsOnInit(ctx?: StateContext<any>): any {
    this.observeChange();
  }

  observeChange(): void {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.Tablet,
      Breakpoints.Web,
      Breakpoints.XLarge
    ]).subscribe((state: BreakpointState) => {
      if (state.breakpoints[Breakpoints.XSmall]) {
        this.store.dispatch(new ScreenSizeChangedAction({breakpointType: BreakpointType.XSMALL}));
      }
      if (state.breakpoints[Breakpoints.Small]) {
        this.store.dispatch(new ScreenSizeChangedAction({breakpointType: BreakpointType.SMALL}));
      }
      if (state.breakpoints[Breakpoints.Medium]) {
        this.store.dispatch(new ScreenSizeChangedAction({breakpointType: BreakpointType.MEDIUM}));
      }
      if (state.breakpoints[Breakpoints.Large]) {
        this.store.dispatch(new ScreenSizeChangedAction({breakpointType: BreakpointType.LARGE}));
      }
      if (state.breakpoints[Breakpoints.XLarge]) {
        this.store.dispatch(new ScreenSizeChangedAction({breakpointType: BreakpointType.XLARGE}));
      }
    });
  }
}
