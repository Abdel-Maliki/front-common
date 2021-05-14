import {NgxsOnInit, Selector, State, StateContext, StateToken} from '@ngxs/store';
import {SkAuthStateModel} from '../auth/type';
import {Injectable} from '@angular/core';
import {SkConfigStateModel} from './type';

/**
 * @author abdel-maliki
 * Date : 15/03/2021
 */


export const SK_CONFIG_STATE_TOKEN = new StateToken<SkConfigStateModel>('skConfigState');

@State({
  name: SK_CONFIG_STATE_TOKEN,
  defaults: {
    backendUrl: `http://localhost:3000/`,
    useErrorInterceptor: true,
    useJwtInterceptor: true,
    useLoadingInterceptor: true,
  }
})
@Injectable()
export class SKConfigState implements NgxsOnInit {

  @Selector([SK_CONFIG_STATE_TOKEN])
  static backendUrlSelector(state: SkConfigStateModel): string {
    return state.backendUrl;
  }

  @Selector([SK_CONFIG_STATE_TOKEN])
  static useErrorInterceptorSelector(state: SkConfigStateModel): boolean {
    return state.useErrorInterceptor;
  }

  @Selector([SK_CONFIG_STATE_TOKEN])
  static useJwtInterceptorSelector(state: SkConfigStateModel): boolean {
    return state.useJwtInterceptor;
  }

  @Selector([SK_CONFIG_STATE_TOKEN])
  static useLoadingInterceptorSelector(state: SkConfigStateModel): boolean {
    return state.useLoadingInterceptor;
  }

  ngxsOnInit(ctx?: StateContext<SkAuthStateModel>): any {
  }

}
