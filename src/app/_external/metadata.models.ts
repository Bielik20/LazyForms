import {ValidatorFn, Validators} from '@angular/forms';
import {getLazyMetadata, LazyMetadata, lazyMetadata} from '../_frameworks/lazy-forms';

abstract class DisplayMetadata extends LazyMetadata {
  label?: string;
  icon?: string;

  constructor(options: {} = {}) {
    super(options);
    this.label = options['label'] || null;
    this.icon = options['icon'] || null;
  }
}

abstract class ValidatorsMetadata extends DisplayMetadata {
  min?: number;
  max?: number;
  required?: boolean;
  email?: boolean;
  minLength?: number;

  constructor(options: {} = {}) {
    super(options);
    this.min = options['min'] || null;
    this.max = options['max'] || null;
    this.required = options['required'] || false;
    this.email = options['email'] || false;
    this.minLength = options['minLength'] || null;
  }

  get validators(): ValidatorFn[] {
    const array = [];
    if (this.min) { array.push(Validators.min((this.min))); }
    if (this.max) { array.push(Validators.max((this.max))); }
    if (this.required) { array.push(Validators.required); }
    if (this.email) { array.push(Validators.email); }
    if (this.minLength) { array.push(Validators.minLength((this.minLength))); }
    return array;
  }
}

export abstract class BaseMetadata extends ValidatorsMetadata {}

export class MetadataAccessor {
  metadata(propertyKey: string): BaseMetadata {
    return getLazyMetadata(propertyKey, this);
  }
}

export function metadata(value: BaseMetadata) {
  return lazyMetadata(value);
}
