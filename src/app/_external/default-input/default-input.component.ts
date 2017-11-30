import {Component, Input, OnInit} from '@angular/core';
import {BaseMetadata} from '../metadata.models';
import {LazyInputComponent, LazyInputService} from '../../_frameworks/lazy-forms';
import {FormControl} from '@angular/forms';

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
  formControl: FormControl;

  constructor(private dynamicChild: LazyInputService) { }

  ngOnInit() {
    this.createForm();
  }

  // TODO: Create a way to remove controls
  // ngOnDestroy() {
  //   console.log('destroy');
  //   this.dynamicChild['removeControl'](this.metadata.key, this.formControl);
  // }

  private createForm() {
    this.formControl = new FormControl(this.value, this.metadata.validators);
    this.dynamicChild.addControl(this.metadata.key, this.formControl);
  }
}
