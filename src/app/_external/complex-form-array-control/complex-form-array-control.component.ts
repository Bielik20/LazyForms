import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {LazyControlComponent} from '../../_frameworks/lazy-forms';
import {UserModel} from '../../decorators-form-example/model';
import {BaseMetadata} from '../metadata.models';

export class ComplexFormArrayControlMetadata extends BaseMetadata {
  component = ComplexFormArrayControlComponent;
}

@Component({
  selector: 'app-complex-form-array-control',
  templateUrl: './complex-form-array-control.component.html',
  styleUrls: ['./complex-form-array-control.component.scss']
})
export class ComplexFormArrayControlComponent implements OnInit, LazyControlComponent {
  @Input() value: UserModel[];
  @Input() metadata: ComplexFormArrayControlMetadata;
  control: FormArray;

  constructor() { }

  ngOnInit() {
    this.control = new FormArray([]);
    this.value.forEach(() => {
      this.control.push(new FormGroup({}));
    });
  }

  addItem() {
    this.value.push(new UserModel());
    this.control.push(new FormGroup({}));
  }

  removeItem(index) {
    this.value.splice(index, 1);
    this.control.removeAt(index);
  }

}
