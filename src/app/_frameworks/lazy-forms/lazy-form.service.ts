import {Injectable, Output} from '@angular/core';
import {AbstractControl, FormArray, FormGroup} from '@angular/forms';
import {Subject} from 'rxjs/Subject';
import {LazySelectorService} from './lazy-selector.service';

@Injectable()
export class LazyFormService implements LazySelectorService {

  @Output() onReset = new Subject();
  private controlOperations: ControlOperations;

  addControl(name: string, control: AbstractControl) {
    this.controlOperations.addControl(name, control);
  }

  removeControl(name: string, control: AbstractControl) {
    this.controlOperations.removeControl(name, control);
  }

  /** It will initialize or reinitialize form */
  initialize(form: AbstractControl) {
    this.controlOperations = ControlOperations.create(form);
    this.resetChildren();
  }

  // Only work during reinitialization because before that no one subscribe to OnReset()
  private resetChildren() {
    this.onReset.next();
  }
}

abstract class ControlOperations {
  form: AbstractControl;

  protected constructor(form: AbstractControl) {
    this.form = form;
  }

  static create(form: AbstractControl): ControlOperations {
    if (form instanceof FormGroup) {
      return new FormGroupOperations(form);
    }
    if (form instanceof FormArray) {
      return new FormArrayOperations(form);
    }
    throw new Error('Invalid argument. Must be FormGroup or FormArray.');
  }

  abstract addControl(name: string, control: AbstractControl);

  abstract removeControl(name: string, control: AbstractControl);
}

class FormArrayOperations extends ControlOperations {
  form: FormArray;

  addControl(name: string, control: AbstractControl) {
    setTimeout(() => this.form.push(control));
  }

  removeControl(name: string, control: AbstractControl) {
    const index = this.form.controls.indexOf(control);
    setTimeout(() => this.form.removeAt(index));
  }
}

class FormGroupOperations extends ControlOperations {
  form: FormGroup;

  addControl(name: string, control: AbstractControl) {
    setTimeout(() => this.form.addControl(name, control));
  }

  removeControl(name: string, control: AbstractControl) {
    setTimeout(() => this.form.removeControl(name));
  }
}
