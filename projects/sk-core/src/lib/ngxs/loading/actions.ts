/**
 * @author abdel-maliki
 */

export class StartLoadingAction {
  static readonly type = '[Layout] Start Loading';
}

export class StopLoadingAction {
  static readonly type = '[Layout] Stop Loading';
}

export class RestoreLoadingAction {
  static readonly type = '[Layout] Restore Loading';
}

export class IncLoadingRequestAction {
  static readonly type = '[Layout] Inc Loading Request';
}

export class DecLoadingRequestAction {
  static readonly type = '[Layout] Dec Loading Request';
}
