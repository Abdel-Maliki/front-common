/**
 * @author abdel-maliki
 * Date : 15/03/2021
 */
import {SKIPagination} from '../../interfaces';

export interface SkConfigStateModel {
  backendUrl: string;
  useErrorInterceptor: boolean;
  useJwtInterceptor: boolean;
  useLoadingInterceptor: boolean;
  pagination: SKIPagination;
  pageSizeOptions: number[];
  links: SkLinksConfig;
}

export interface SkLinksConfig {
  userLink: string;
  enterpriseLink: string;
}
