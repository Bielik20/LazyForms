import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NestedFormExampleModel } from './model';

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
    this.logChangeDetection();
  }

  testFormReset() {
    this.model.title = this.form.value.userModel.firstName;
    setTimeout(() => {
      this.form = new FormGroup({});
      this.logChangeDetection();
    });
    // this.form = new FormGroup({});
    // this.logChangeDetection();
  }

  private logChangeDetection() {
    this.form.valueChanges.subscribe(() => {
      if (this.form.pristine) {
        console.log('Pristine', JSON.stringify(this.form.value));
      } else {
        console.log('DIRTY');
      }
    });
  }
}
