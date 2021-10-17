/**
 * @author abdel-maliki
 * Date : 15/03/2021
 */
import {SKIPagination, MenuCategory} from '../../interfaces';

export interface SkConfigStateModel {
  backendUrl: string;
  useErrorInterceptor: boolean;
  useJwtInterceptor: boolean;
  useLoadingInterceptor: boolean;
  pagination: SKIPagination;
  pageSizeOptions: number[];
  form: SkFormConfig;
  menuLeftItems: MenuCategory[];
}

export interface SkFormConfig {
  validators: SkFormValidatorConfig;
}

export interface SkFormValidatorConfig {
  maxLength: number;
  minLength: number;
}
