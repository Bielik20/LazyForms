import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormArrayExampleModel} from './model';

@Component({
  selector: 'app-form-array-example',
  templateUrl: './form-array-example.component.html',
  styleUrls: ['./form-array-example.component.scss']
})
export class FormArrayExampleComponent implements OnInit {
  form = new FormGroup({});
  model = new FormArrayExampleModel();

  constructor() { }

  ngOnInit() {
    this.test();
  }

  private test() {
    this.form.valueChanges.subscribe(() => {
      if (this.form.pristine)
        console.log('A');
      else
        console.log('User');
    });
  }
}
