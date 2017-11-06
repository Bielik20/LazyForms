export abstract class LazyMetadata {
  key: string;
  component: any;

  constructor(options: {} = {}) {
    this.key = options['key'];
    this.component = options['component'];
  }
}
