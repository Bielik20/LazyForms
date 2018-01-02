import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {LazyControlComponent, OnLazySetup} from '../../_frameworks/lazy-forms';
import {UserModel} from '../../decorators-form-example/model';
import {BaseMetadata} from '../metadata.models';

export class NestedFormControlMetadata extends BaseMetadata {
  component = NestedFormControlComponent;
}

@Component({
  selector: 'app-nested-form-input',
  templateUrl: './nested-form-control.component.html',
  styleUrls: ['./nested-form-control.component.scss']
})
export class NestedFormControlComponent implements OnLazySetup, LazyControlComponent {
  @Input() value: UserModel;
  @Input() metadata: NestedFormControlMetadata;
  // control = new FormGroup({});
  control: FormGroup;

  onLazySetup() {
    this.control = new FormGroup({});
  }
}
