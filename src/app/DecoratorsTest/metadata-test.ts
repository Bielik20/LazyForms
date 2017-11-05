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
  // @metadata<string>('my first reflection test')
  // @log
  // @getKey
  @lazyMetadata('my second reflection test')
  testProperty: string;
}

function metadata<T>(value: T) {
  return Reflect.metadata('lazy-metadata', value);
}

export function getMetadata<T>(propertyKey: string, target: object): T {
  return Reflect.getMetadata('lazy-metadata', target, propertyKey);
}


function lazyMetadata(value: any) {
  return function (target: Object, key: string | symbol) {
    Reflect.defineMetadata('lazy-metadata', value, target, key);
  };
}


function getKey (target: Object, key: string | symbol) {
  // let value = target[key];
  console.log(key);
  Reflect.defineMetadata('lazy-metadata', 'value', target, key);
}

function log (target: Object, key: string | symbol) {
  let value = target[key];

  const getter = () =>  {
    console.log('Getting value: ', value);
    return value;
  };
  const setter = (val) => {
    console.log('Setting value: ', val);
    value = val;
  };
  Reflect.deleteProperty[key];
  Reflect.defineProperty(target, key, {
    get: getter,
    set: setter
  });
}
