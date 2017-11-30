import {Component, Input, OnInit} from '@angular/core';
import {BaseMetadata} from '../metadata.models';
import {UserModel} from '../../decorators-form-example/model';
import {LazyInputService} from '../../_frameworks/lazy-forms';
import {FormGroup} from '@angular/forms';

export class NestedFormInputMetadata extends BaseMetadata {
  component = NestedFormInputComponent;
}

@Component({
  selector: 'app-nested-form-input',
  templateUrl: './nested-form-input.component.html',
  styleUrls: ['./nested-form-input.component.scss']
})
export class NestedFormInputComponent implements OnInit {

  @Input() value: UserModel;
  @Input() metadata: NestedFormInputMetadata;
  form = new FormGroup({});

  constructor(private dynamicChild: LazyInputService) { }

  ngOnInit() {
    this.dynamicChild.addControl(this.metadata.key, this.form);
  }
}
