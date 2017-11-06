import {EventEmitter, Injectable, Output} from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';
import {LazySelectorService} from './lazy-selector.service';
import {Subject} from 'rxjs/Subject';
import {LazyInputService} from './lazy-input.service';

@Injectable()
export class LazyFormService implements LazyInputService, LazySelectorService {

  @Output() onReset = new Subject();

  private fieldsArray: any[];
  private fieldsCount: number;
  private onFormComplete: EventEmitter<any>;
  private formGroup: FormGroup;
  private isFormComplete = false;

  addControlAndReportReady(name: string, control: AbstractControl) {
    this.fieldsArray.push({name: name, control: control});
    this.completeFormIfFieldsAreReady();
  }

  configure(onFormComplete: EventEmitter<any>, fieldsCount: number) {
    this.fieldsCount = fieldsCount;
    this.onFormComplete = onFormComplete;
  }

  /** It will fire 'onFormComplete' when finished. */
  initialize(formGroup: FormGroup) {
    this.formGroup = formGroup;
    this.fieldsArray = [];
  }

  /** It will destroy current children and fire 'onFormComplete' when finished. */
  reinitialize(formGroup: FormGroup) {
    if (this.isFormComplete === false) { return; }
    this.isFormComplete = false;

    this.initialize(formGroup);
    this.resetChildren();
  }

  private completeFormIfFieldsAreReady() {
    if (this.fieldsCount === this.fieldsArray.length) { setTimeout(() => { this.completeForm(); }); }
  }

  private completeForm() {
    this.fieldsArray.forEach(el => {
      this.formGroup.addControl(el.name, el.control);
    });
    this.onFormComplete.emit(null);
    this.isFormComplete = true;
  }

  private resetChildren() {
    this.onReset.next();
  }

}
