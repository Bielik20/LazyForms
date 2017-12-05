import {AbstractControl, FormArray, FormGroup} from '@angular/forms';

export abstract class ControlOperations {
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

class FormArrayOperations implements ControlOperations {
  constructor(private form: FormArray) { }

  addControl(name: string, control: AbstractControl) {
    setTimeout(() => this.form.push(control));
  }

  removeControl(name: string, control: AbstractControl) {
    const index = this.form.controls.indexOf(control);
    setTimeout(() => this.form.removeAt(index));
  }
}

class FormGroupOperations implements ControlOperations {
  constructor(private form: FormGroup) { }

  addControl(name: string, control: AbstractControl) {
    setTimeout(() => this.form.addControl(name, control));
  }

  removeControl(name: string, control: AbstractControl) {
    setTimeout(() => this.form.removeControl(name));
  }
}
