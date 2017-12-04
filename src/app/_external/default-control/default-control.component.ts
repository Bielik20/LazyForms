import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {LazyControlComponent} from '../../_frameworks/lazy-forms';
import {BaseMetadata} from '../metadata.models';

export class DefaultControlMetadata extends BaseMetadata {
  type: string;
  step?: number;
  component = DefaulControlComponent;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || 'text';
    this.step = options['step'] || 1;
  }
}

@Component({
  templateUrl: './default-control.component.html',
  styleUrls: ['./default-control.component.scss']
})
export class DefaulControlComponent implements OnInit, LazyControlComponent {
  @Input() value: string | number | Date;
  @Input() metadata: DefaultControlMetadata;
  control: FormControl;

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.control = new FormControl(this.value, this.metadata.validators);
  }
}
