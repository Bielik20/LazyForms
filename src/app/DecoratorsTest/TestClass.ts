export class Greeter {
  @format('Hello, %s')
  // @Reflect.metadata('format', 'metadataValue')
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    console.log('test')
    const formatString = getFormat(this, 'greeting');
    console.log(formatString);
    // return formatString.replace('%s', this.greeting);
  }
}

const formatMetadataKey = Symbol('format');

function format(formatString: string) {
  console.log('formatString = ' + formatString);
  return Reflect.metadata('format', formatString);
}

function getFormat(target: any, propertyKey: string) {
  console.log('getFormat')
  return Reflect.getMetadata('format', target, propertyKey);
}
