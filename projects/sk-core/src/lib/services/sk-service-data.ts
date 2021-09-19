import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {PasswordStateService} from './password-state-service';

/**
 * @author abdel-maliki
 * Date : 26/11/2020
 */

@Injectable({providedIn: 'root'})
export class SkServiceData {
  protected constructor(public httpClient: HttpClient,
                        public translate: TranslateService,
                        public passwordStateService: PasswordStateService) {
  }
}