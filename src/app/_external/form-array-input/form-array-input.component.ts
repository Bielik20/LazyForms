import {Component, Input, OnInit} from '@angular/core';
import {BaseMetadata} from '../metadata.models';
import {DefaultInputMetadata} from '../default-input/default-input.component';
import {FormArray} from '@angular/forms';
import {LazyInputService} from '../../_frameworks/lazy-forms';

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
export class FormArrayInputComponent implements OnInit {
  @Input() value: string[];
  @Input() metadata: FormArrayInputMetadata;
  formArray: FormArray;

  constructor(private dynamicChild: LazyInputService) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.formArray = new FormArray([], {validators: this.metadata.validators});
    this.dynamicChild.addControl(this.metadata.key, this.formArray);
  }

  addItem() {
    this.value.push('');
  }

  removeItem(item: string) {
    const index = this.value.indexOf(item);
    if (index > -1) {
      this.value.splice(index, 1);
    }
  }
}
