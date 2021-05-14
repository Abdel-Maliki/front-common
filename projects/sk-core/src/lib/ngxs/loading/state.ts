import {Action, Selector, State, StateContext, StateToken} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {SkLoadingStateModel} from './types';
import {DecLoadingRequestAction, IncLoadingRequestAction, RestoreLoadingAction, StartLoadingAction, StopLoadingAction} from './actions';

/**
 * @author abdel-maliki
 */

export const SK_LOADING_STATE_TOKEN = new StateToken<SkLoadingStateModel>('skLoadingState');

@State({
  name: SK_LOADING_STATE_TOKEN,
  defaults: {
    active: false,
    requestsSize: 0,
  }
})
@Injectable()
export class SkLoadingState {

  @Selector([SK_LOADING_STATE_TOKEN])
  static activeSelector(state: SkLoadingStateModel): boolean {
    return state.active;
  }

  @Selector([SK_LOADING_STATE_TOKEN])
  static requestsSizeSelector(state: SkLoadingStateModel): number {
    return state.requestsSize;
  }

  @Action(StartLoadingAction)
  startLoading(ctx: StateContext<SkLoadingStateModel>): void {
    ctx.patchState({active: true});
  }

  @Action(StopLoadingAction)
  stopLoading(ctx: StateContext<SkLoadingStateModel>): void {
    ctx.patchState({active: false});
  }

  @Action(RestoreLoadingAction)
  restoreLoading(ctx: StateContext<SkLoadingStateModel>): void {
    ctx.patchState({active: false, requestsSize: 0});
  }

  @Action(IncLoadingRequestAction)
  incLoadingRequest(ctx: StateContext<SkLoadingStateModel>): void {
    ctx.patchState({active: true, requestsSize: ctx.getState().requestsSize++});
  }

  @Action(DecLoadingRequestAction)
  decLoadingRequest(ctx: StateContext<SkLoadingStateModel>): void {
    const requestsSize = ctx.getState().requestsSize--;
    ctx.patchState({active: requestsSize > 0, requestsSize});
  }

}
