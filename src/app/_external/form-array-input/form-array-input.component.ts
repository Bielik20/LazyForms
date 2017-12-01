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

  altValue = [];

  constructor(private dynamicChild: LazyInputService) { }

  ngOnInit() {
    this.value.forEach(item => this.altValue.push({value: item}));
    this.createForm();
  }

  private createForm() {
    this.formArray = new FormArray([], {validators: this.metadata.validators});
    this.dynamicChild.addControl(this.metadata.key, this.formArray);
  }

  addItem() {
    this.altValue.push({value: ''}); 
    // this.value[0] = "test"
    // console.log(this.value)
  }

  removeItem(index: number) {
    console.log('form-array-input', index, this.formArray.at(index));
    console.log(this.altValue);
    this.altValue.splice(index, 1);
    console.log(this.altValue);


    // const index = this.value.indexOf(item);
    // console.log(index);
    // if (index > -1) {
    //   this.value.splice(index, 1);
    // }
  }
}
