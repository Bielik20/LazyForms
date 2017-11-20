import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {DefaultInputMetadata} from '../_external/default-input/default-input.component';

@Component({
  selector: 'app-no-decorators-form-example',
  templateUrl: './no-decorators-form-example.component.html',
  styleUrls: ['./no-decorators-form-example.component.scss']
})
export class NoDecoratorsFormExampleComponent {

  form = new FormGroup({});
  value = 'Populated value';
  metadata = new DefaultInputMetadata({
    key: 'sampleField',
    label: 'Sample Label',
    required: true,
  });

  constructor() { }

  onSubmit() {
    console.log(this.form.value);
  }

}
