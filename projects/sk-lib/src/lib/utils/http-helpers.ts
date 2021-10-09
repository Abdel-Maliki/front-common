import {HttpHeaders, HttpParams} from '@angular/common/http';

/**
 * @author abdel-maliki
 * Date : 20/10/2020
 */


export type  HeadersOptions = {
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  observe?: 'body';
  params?: HttpParams | {
    [param: string]: string | string[];
  };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
};


export class HttpHelpers {

  public static getOptions(): HeadersOptions {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYjdjYjRhMTQ4MTAzNWZhZTg2MTMxMSIsImlhdCI6MTYzMzc2Njg4NSwiZXhwIjoxNjM1NDk0ODg1fQ.0ebD508jCOTMEblYDIfgfAiWBqJfM8hJGx-3rTCgwq8'
      })
    };
  }

  /*public static map<T, R = any>(response: ResponseWrapper<T>, skObjectMapper: SkIObjectMapper<T, R>): ResponseWrapper<T> {
    return new ResponseWrapper<T>(response.data, response.pagination, response.code, response.error);
  }

  public static mapM<T>(response: ResponseWrapper<T>): ResponseWrapper<T> {
    return new ResponseWrapper<T>(response.data, response.pagination, response.code, response.error);
  }*/


}
