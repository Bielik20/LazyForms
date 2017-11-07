import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {UserModel} from './model';

@Component({
  selector: 'app-decorators-form',
  templateUrl: './decorators-form.component.html',
  styleUrls: ['./decorators-form.component.scss']
})
export class DecoratorsFormComponent {

  form = new FormGroup({});
  model = new UserModel({lastName: 'This value is predefined'});

  constructor() { }

  onSubmit() {
    console.log(this.form.value);
    console.log(this.model);
  }

  testFormReset() {
    this.model.lastName = this.form.value.firstName;
    // setTimeout(() => this.form = new FormGroup({}));
    this.form = new FormGroup({});
  }

}
