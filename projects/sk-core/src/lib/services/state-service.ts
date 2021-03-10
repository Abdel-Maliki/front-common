/**
 * @author abdel-maliki
 * Date : 09/03/2021
 */
import {Injectable} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {Store} from '@ngrx/store';
import {screenSizeChangedAction} from '../layout/state/layout-actions';
import {BreakpointType} from '../layout/state/layout-types';

@Injectable()
export class SkStateService {
  constructor(private breakpointObserver: BreakpointObserver, private store: Store) {
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
      console.log('Class: SkStateService, Function: , Line 26 state(): '
      , state);
      if (state.breakpoints[Breakpoints.XSmall]) {
        this.store.dispatch(screenSizeChangedAction({breakpointType: BreakpointType.XSMALL}));
      }
      if (state.breakpoints[Breakpoints.Small]) {
        this.store.dispatch(screenSizeChangedAction({breakpointType: BreakpointType.SMALL}));
      }
      if (state.breakpoints[Breakpoints.Medium]) {
        this.store.dispatch(screenSizeChangedAction({breakpointType: BreakpointType.MEDIUM}));
      }
      if (state.breakpoints[Breakpoints.Large]) {
        this.store.dispatch(screenSizeChangedAction({breakpointType: BreakpointType.LARGE}));
      }
      if (state.breakpoints[Breakpoints.XLarge]) {
        this.store.dispatch(screenSizeChangedAction({breakpointType: BreakpointType.XLARGE}));
      }
    });
  }
}
