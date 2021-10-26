import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {PasswordStateService} from './password-state-service';
import {Store} from '@ngxs/store';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';

/**
 * @author abdel-maliki
 */

@Injectable({providedIn: 'root'})
export class SkComponentsData {
  protected constructor(public translate: TranslateService,
                        public store: Store,
                        public router: Router,
                        public activatedRoute: ActivatedRoute,
                        public formBuilder: FormBuilder,
                        public passwordStateService: PasswordStateService) {
  }
}
