import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserModel } from '../decorators-form-example/model';
import { ComplexFormArrayExampleModel } from './model';

@Component({
  selector: 'app-complex-form-array-example',
  templateUrl: './complex-form-array-example.component.html',
  styleUrls: ['./complex-form-array-example.component.scss']
})
export class ComplexFormArrayExampleComponent implements OnInit {
  form = new FormGroup({});
  model = new ComplexFormArrayExampleModel({ array: [new UserModel({ firstName: 'Test Name' })] });

  constructor() { }

  ngOnInit() {
  }

}
