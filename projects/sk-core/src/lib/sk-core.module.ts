import {NgModule, Optional, SkipSelf} from '@angular/core';
import {SkStateService} from './services/state-service';

@NgModule({
  declarations: [],
  imports: [],
  providers: [SkStateService],
  exports: []
})
export class SkCoreModule {
  constructor(@Optional() @SkipSelf() core: SkCoreModule, private stateService: SkStateService) {
    if (core) {
      throw new Error('Vous ne devez importer SkCoreModule que dans le module racine');
    }
    stateService.observeChange();

  }
}
