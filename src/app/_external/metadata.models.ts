import { ValidatorFn, Validators } from '@angular/forms';
import { getLazyMetadata, LazyMetadata, setLazyMetadata } from '../_frameworks/lazy-forms';

abstract class DisplayMetadata extends LazyMetadata {
  label?: string;
  placeholder?: string;
  icon?: string;

  constructor(options: {} = {}) {
    super(options);
    this.label = options['label'];
    this.icon = options['icon'];
    this.placeholder = options['placeholder'] || '';
  }
}

abstract class ValidatorsMetadata extends DisplayMetadata {
  min?: number;
  max?: number;
  required?: boolean;
  requiredTrue?: boolean;
  email?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;

  constructor(options: {} = {}) {
    super(options);
    this.min = options['min'];
    this.max = options['max'];
    this.required = options['required'] || false;
    this.requiredTrue = options['requiredTrue'] || false;
    this.email = options['email'] || false;
    this.minLength = options['minLength'];
    this.maxLength = options['maxLength'];
    this.pattern = options['pattern'];
  }

  get validators(): ValidatorFn[] {
    const array = [];
    if (this.min) { array.push(Validators.min((this.min))); }
    if (this.max) { array.push(Validators.max((this.max))); }
    if (this.required) { array.push(Validators.required); }
    if (this.requiredTrue) { array.push(Validators.requiredTrue); }
    if (this.email) { array.push(Validators.email); }
    if (this.minLength) { array.push(Validators.minLength(this.minLength)); }
    if (this.maxLength) { array.push(Validators.maxLength(this.maxLength)); }
    if (this.pattern) { array.push(Validators.pattern(this.pattern)); }
    return array;
  }
}

export abstract class BaseMetadata extends ValidatorsMetadata {}

export abstract class MetadataAccessor {
  metadata(propertyKey: string): BaseMetadata {
    return getLazyMetadata(propertyKey, this);
  }
}

export function metadata(value: BaseMetadata) {
  return setLazyMetadata(value);
}
