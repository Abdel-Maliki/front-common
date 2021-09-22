export interface SkIObjectMapper<T> {
  toJson(o: T | undefined): any | undefined;

  fromJson(o: any | undefined): T | undefined;
}
