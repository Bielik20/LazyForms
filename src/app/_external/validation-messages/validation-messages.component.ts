import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ValMsg } from '../../_frameworks/ng-val-msgs/val-msg';

@Component({
  selector: 'app-validation-messages',
  templateUrl: './validation-messages.component.html',
  styleUrls: ['./validation-messages.component.scss']
})
export class ValidationMessagesComponent implements OnChanges {
  @Input() control: AbstractControl;
  valMsg: ValMsg;

  ngOnChanges(changes: SimpleChanges) {
    if (this.control) {
      this.valMsg = new ValMsg(this.control, { min: 'Min Test -> min = {{min}}' });
    }
  }
}
