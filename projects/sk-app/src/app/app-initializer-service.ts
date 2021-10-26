import {Injectable} from '@angular/core';
import {Store} from '@ngxs/store';
import {SkSetConfigAction, DEFAULT_CONFIG} from '@sk-framework/sk-core';

@Injectable({providedIn: 'root'})
export class AppInitializerService {
  constructor(public store: Store) {
  }

  public initApp(): Promise<void> {
    return this.store.dispatch(new SkSetConfigAction({
      ...DEFAULT_CONFIG,
      menuLeftItems: [],
    })).toPromise();
  }
}
