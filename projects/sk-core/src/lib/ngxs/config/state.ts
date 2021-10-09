import {NgxsOnInit, Selector, State, StateContext, StateToken} from '@ngxs/store';
import {SkAuthStateModel} from '../auth/type';
import {Injectable} from '@angular/core';
import {SkConfigStateModel, SkFormConfig, SkLinksConfig} from './type';
import {SKIPagination} from '../../interfaces';

/**
 * @author abdel-maliki
 * Date : 15/03/2021
 */


export const SK_CONFIG_STATE_TOKEN = new StateToken<SkConfigStateModel>('skConfigState');

export const DEFAULT_PAGINATION: SKIPagination = {
  direction: 1,
  page: 0,
  size: 10,
  sort: 'desc',
};

export const DEFAULT_LINKS_CONFIG: SkLinksConfig = {
  enterpriseLink: 'enterprises',
  userLink: 'users',
};

export const DEFAULT_FORM_CONFIG: SkFormConfig = {
  validators: {
    maxLength: 255,
    minLength: 4,
  }
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
    links: DEFAULT_LINKS_CONFIG,
    form: DEFAULT_FORM_CONFIG,
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

  @Selector([SK_CONFIG_STATE_TOKEN])
  static formSelector(state: SkConfigStateModel): SkFormConfig {
    return state.form;
  }


  @Selector([SK_CONFIG_STATE_TOKEN])
  static selector(state: SkConfigStateModel): SkConfigStateModel {
    return state;
  }


  ngxsOnInit(ctx?: StateContext<SkAuthStateModel>): any {
  }

}
