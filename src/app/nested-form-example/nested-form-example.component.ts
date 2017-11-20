import {Component, OnInit} from '@angular/core';
import {NestedFormExampleModel} from './model';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-nested-form-example',
  templateUrl: './nested-form-example.component.html',
  styleUrls: ['./nested-form-example.component.scss']
})
export class NestedFormExampleComponent implements OnInit {

  form = new FormGroup({});
  model = new NestedFormExampleModel();

  constructor() { }

  ngOnInit() {
  }

  onFormComplete() {
    console.log('onFormComplete');
  }

  testFormReset() {
    this.model.title = this.form.value.userModel.firstName;
    // setTimeout(() => this.form = new FormGroup({}));
    this.form = new FormGroup({});
  }

}
