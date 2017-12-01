import {EventEmitter, Injectable, Output} from '@angular/core';
import {AbstractControl, FormArray, FormGroup} from '@angular/forms';
import {LazySelectorService} from './lazy-selector.service';
import {Subject} from 'rxjs/Subject';
import {LazyInputService} from './lazy-input.service';

@Injectable()
export class LazyFormService implements LazyInputService, LazySelectorService {

  @Output() onReset = new Subject();
  private addControlState: AddControlState;

  addControl(name: string, control: AbstractControl) {
    this.addControlState.addControl(name, control);
  }

  // TODO: Create a way to remove controls
  removeControl(name: string, control: AbstractControl) {
    const a = this.addControlState.form as FormArray;
    const index = a.controls.indexOf(control);
    console.log(a, control.value, index);
    setTimeout(() => a.removeAt(index));
  }

  /** It will initialize or reinitialize form */
  initialize(form: AbstractControl) {
    this.addControlState = AddControlState.make(form);
    this.resetChildren();
  }

  // Only work during reinitialization because before that no one subscribe to OnReset()
  private resetChildren() {
    this.onReset.next();
  }
}

abstract class AddControlState {
  form: AbstractControl;

  protected constructor(form: AbstractControl) {
    this.form = form;
  }

  static make(form: AbstractControl): AddControlState {
    if (form instanceof FormGroup) {
      return new AddGroupControlState(form);
    }
    if (form instanceof FormArray) {
      return new AddArrayControlState(form);
    }
    throw new Error('Invalid argument. Must be FormGroup or FormArray.');
  }

  abstract addControl(name: string, control: AbstractControl);
}

class AddArrayControlState extends AddControlState {
  form: FormArray;

  addControl(name: string, control: AbstractControl) {
    setTimeout(() => this.form.push(control));
  }
}

class AddGroupControlState extends AddControlState {
  form: FormGroup;

  addControl(name: string, control: AbstractControl) {
    setTimeout(() => this.form.addControl(name, control));
  }
}
