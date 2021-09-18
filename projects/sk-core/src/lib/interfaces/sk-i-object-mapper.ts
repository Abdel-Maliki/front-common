export interface SkIObjectMapper<T, TM = T> {
  toJson(o: T | undefined): TM | undefined;

  fromJson(o: TM | undefined): T | undefined;
}
