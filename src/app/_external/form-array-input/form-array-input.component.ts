import {Component, Input, OnInit} from '@angular/core';
import {FormArray} from '@angular/forms';
import {LazyInputComponent} from '../../_frameworks/lazy-forms';
import {DefaultInputMetadata} from '../default-input/default-input.component';
import {BaseMetadata} from '../metadata.models';

export class FormArrayInputMetadata extends BaseMetadata {
  component = FormArrayInputComponent;
  child: DefaultInputMetadata;

  constructor(options: {} = {}) {
    super(options);
    this.child = new DefaultInputMetadata(options['child']);
  }
}

@Component({
  templateUrl: './form-array-input.component.html',
  styleUrls: ['./form-array-input.component.scss']
})
export class FormArrayInputComponent implements OnInit, LazyInputComponent {
  @Input() value: string[];
  @Input() metadata: FormArrayInputMetadata;
  control: FormArray;
  altValue = [];


  ngOnInit() {
    this.value.forEach(item => this.altValue.push({value: item}));
    this.createForm();
  }

  private createForm() {
    this.control = new FormArray([], {validators: this.metadata.validators});
  }

  addItem() {
    this.control.markAsDirty();
    this.altValue.push({value: ''});
  }

  removeItem(item: any) {
    const index = this.altValue.indexOf(item);
    if (index > -1) {
      this.altValue.splice(index, 1);
    }
  }
}
