import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {PasswordStateService} from './password-state-service';
import {Store} from '@ngxs/store';
import {FormBuilder} from '@angular/forms';

/**
 * @author abdel-maliki
 */

@Injectable({providedIn: 'root'})
export class SkComponentsData {
  protected constructor(public translate: TranslateService,
                        public store: Store,
                        public formBuilder: FormBuilder,
                        public passwordStateService: PasswordStateService) {
  }
}
