import {AbstractControl, Validators} from '@angular/forms';
import {LazyMetadata} from '../_frameworks/lazy-forms';

class DisplayMetadata extends LazyMetadata {
  label?: string;
  icon?: string;

  constructor(options: {} = {}) {
    super(options);
    this.label = options['label'] || null;
    this.icon = options['icon'] || null;
  }
}

class ValidatorsMetadata extends DisplayMetadata {
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

  resolveValidators(formControl: AbstractControl) {
    if (this.min) {
      formControl.setValidators(Validators.min((this.min)));
    }
    if (this.max) {
      formControl.setValidators(Validators.max((this.max)));
    }
    if (this.required) {
      formControl.setValidators(Validators.required);
    }
    if (this.email) {
      formControl.setValidators(Validators.email);
    }
    if (this.minLength) {
      formControl.setValidators(Validators.minLength((this.minLength)));
    }
  }
}

export class BaseMetadata extends ValidatorsMetadata { }
