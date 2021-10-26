import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {PasswordStateService} from './password-state-service';
import {Store} from '@ngxs/store';

/**
 * @author abdel-maliki
 */

@Injectable({providedIn: 'root'})
export class SkServiceData {
  protected constructor(public httpClient: HttpClient,
                        public translate: TranslateService,
                        public store: Store,
                        public passwordStateService: PasswordStateService) {
  }
}
