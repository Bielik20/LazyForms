import {Component, Input, OnInit} from '@angular/core';
import {FormArray} from '@angular/forms';
import {LazyControlComponent} from '../../_frameworks/lazy-forms';
import {DefaultControlMetadata} from '../default-control/default-control.component';
import {BaseMetadata} from '../metadata.models';

export class FormArrayControlMetadata extends BaseMetadata {
  component = FormArrayControlComponent;
  child: DefaultControlMetadata;

  constructor(options: {} = {}) {
    super(options);
    this.child = new DefaultControlMetadata(options['child']);
  }
}

@Component({
  templateUrl: './form-array-control.component.html',
  styleUrls: ['./form-array-control.component.scss']
})
export class FormArrayControlComponent implements OnInit, LazyControlComponent {
  @Input() value: string[];
  @Input() metadata: FormArrayControlMetadata;
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
      this.control.markAsDirty();
      this.altValue.splice(index, 1);
    }
  }

  onItemComponentCreate(item: any, component: LazyControlComponent) {
    component.control.valueChanges.subscribe(val => {
      item.value = val;
      this.sort();
    });
  }

  sort() {
    this.altValue.sort((a, b) => a.value > b.value ? -1 : 1);
  }
}
