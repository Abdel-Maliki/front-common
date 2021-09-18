/**
 * @author abdel-maliki
 */

export class UpdateLog<T> {
  updateDate: Date | undefined;
  logId: any;
  before: Partial<T> | undefined;
  after: Partial<T> | undefined;
}
