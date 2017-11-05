export class MetadataAccessor<T> {
  getMetadata(propertyKey: string): T {
    return getLazyMetadata(propertyKey, this);
  }
}

export class SampleClass {
  prop1: string;
  prop2: number;
}

export class MetadataTest extends MetadataAccessor<string> {
  @lazyMetadata('my second reflection test')
  testProperty: string;
}

function lazyMetadata(value: any) {
  return function (target: Object, key: string | symbol) {
    Reflect.defineMetadata('lazy-metadata', value, target, key);
  };
}

export function getLazyMetadata<T>(propertyKey: string, target: object): T {
  return Reflect.getMetadata('lazy-metadata', target, propertyKey);
}
