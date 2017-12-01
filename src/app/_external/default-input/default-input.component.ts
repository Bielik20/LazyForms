import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Subject} from 'rxjs/Subject';
import {LazyInputComponent} from '../../_frameworks/lazy-forms';
import {BaseMetadata} from '../metadata.models';

export class DefaultInputMetadata extends BaseMetadata {
  type: string;
  step?: number;
  component = DefaultInputComponent;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || 'text';
    this.step = options['step'] || 1;
  }
}

@Component({
  templateUrl: './default-input.component.html',
  styleUrls: ['./default-input.component.scss']
})
export class DefaultInputComponent implements OnInit, LazyInputComponent {
  @Input() value: string | number | Date;
  @Input() metadata: DefaultInputMetadata;
  control: FormControl;
  reportReady = new Subject();
  guid = Math.floor(Math.random() * 100);

  constructor() { }

  ngOnInit() {
    this.createForm();
    this.reportReady.next();
  }

  private createForm() {
    this.control = new FormControl(this.value, this.metadata.validators);
  }
}
