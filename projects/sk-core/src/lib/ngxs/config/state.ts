import {NgxsOnInit, Selector, State, StateContext, StateToken} from '@ngxs/store';
import {SkAuthStateModel} from '../auth/type';
import {Injectable} from '@angular/core';
import {SkConfigStateModel} from './type';
import {SKIPagination} from '../../interfaces';

/**
 * @author abdel-maliki
 * Date : 15/03/2021
 */


export const SK_CONFIG_STATE_TOKEN = new StateToken<SkConfigStateModel>('skConfigState');

export const DEFAULT_PAGINATION: SKIPagination = {
  direction: 0,
  page: 0,
  size: 20,
  sort: 'desc',
};

@State({
  name: SK_CONFIG_STATE_TOKEN,
  defaults: {
    backendUrl: `http://localhost:3000/`,
    useErrorInterceptor: true,
    useJwtInterceptor: true,
    useLoadingInterceptor: true,
    pagination: DEFAULT_PAGINATION,
    pageSizeOptions: [10, 20, 50, 100, 150, 200, 300, 500],
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

  @Selector([SK_CONFIG_STATE_TOKEN])
  static paginationSelector(state: SkConfigStateModel): SKIPagination {
    return state.pagination;
  }

  @Selector([SK_CONFIG_STATE_TOKEN])
  static pageSizeOptionsSelector(state: SkConfigStateModel): number[] {
    return state.pageSizeOptions;
  }


  ngxsOnInit(ctx?: StateContext<SkAuthStateModel>): any {
  }

}
