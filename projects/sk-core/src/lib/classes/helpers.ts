import {SkIObjectMapper} from '../interfaces';

/**
 * @author abdel-maliki
 */

export class Helpers {
  public static hasRole(roles: string[], role: string): boolean {
    return !!roles && !!role && roles.includes(role);
  }

  public static hasEveryRoles(allRoles: string[], roles: string[]): boolean {
    return roles && roles.every(role => Helpers.hasRole(allRoles, role));
  }

  public static haseSomeRoles(allRoles: string[], roles: string[]): boolean {
    return roles && roles.some(role => Helpers.hasRole(allRoles, role));
  }

  static fromJson<T, RETURN_TYPE extends T | Array<T> = T>(response: any | undefined,
                                                           skObjectMapper: SkIObjectMapper<T>): RETURN_TYPE {
    return ((response instanceof Array)
      ? response.map(value => skObjectMapper.fromJson(value))
      : skObjectMapper.fromJson(response)) as RETURN_TYPE;
  }

  public static fail(value: never): void {
    throw new Error('Ce cas n\'a pas encore été géré ,' + value);
  }
}
