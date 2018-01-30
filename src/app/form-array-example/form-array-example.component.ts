import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormArrayExampleModel } from './model';

@Component({
  selector: 'app-form-array-example',
  templateUrl: './form-array-example.component.html',
  styleUrls: ['./form-array-example.component.scss']
})
export class FormArrayExampleComponent implements OnInit {
  form = new FormGroup({});
  model = new FormArrayExampleModel({ array: ['a', 'b', 'a'] });

  constructor() { }

  ngOnInit() {
    this.logChangeDetection();
  }

  private logChangeDetection() {
    this.form.valueChanges.subscribe(() => {
      if (this.form.pristine) {
        console.log('Pristine');
      } else {
        console.log('DIRTY');
      }
    });
  }
}
