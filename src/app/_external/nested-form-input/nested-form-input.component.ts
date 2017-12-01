import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Subject} from 'rxjs/Subject';
import {LazyInputComponent} from '../../_frameworks/lazy-forms';
import {UserModel} from '../../decorators-form-example/model';
import {BaseMetadata} from '../metadata.models';

export class NestedFormInputMetadata extends BaseMetadata {
  component = NestedFormInputComponent;
}

@Component({
  selector: 'app-nested-form-input',
  templateUrl: './nested-form-input.component.html',
  styleUrls: ['./nested-form-input.component.scss']
})
export class NestedFormInputComponent implements OnInit, LazyInputComponent {

  @Input() value: UserModel;
  @Input() metadata: NestedFormInputMetadata;
  control = new FormGroup({});
  reportReady = new Subject();

  constructor() { }

  ngOnInit() {
    this.reportReady.next();
  }
}
