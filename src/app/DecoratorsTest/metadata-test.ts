export class MetadataAccessor<T> {
  getMetadata(propertyKey: string): T {
    return getMetadata(propertyKey, this);
  }
}

export class SampleClass {
  prop1: string;
  prop2: number;
}

export class MetadataTest extends MetadataAccessor<string> {
  @metadata<string>('my first reflection test')
  testProperty: string;
}

function metadata<T>(value: T) {
  return Reflect.metadata('lazy-metadata', value);
}

export function getMetadata<T>(propertyKey: string, target: object): T {
  return Reflect.getMetadata('lazy-metadata', target, propertyKey);
}
