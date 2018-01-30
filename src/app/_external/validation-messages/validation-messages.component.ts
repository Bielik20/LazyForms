import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { ValidationMessagesService } from '../../_frameworks/validation-messages/validation-messages.service';

@Component({
  selector: 'app-validation-messages',
  templateUrl: './validation-messages.component.html',
  styleUrls: ['./validation-messages.component.scss']
})
export class ValidationMessagesComponent implements OnChanges, OnDestroy {
  @Input() control: AbstractControl;
  first: string;
  array: string[];
  dictionary: Map<string, string>;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private validationMessages: ValidationMessagesService) { }

  ngOnChanges(changes: SimpleChanges) {
    this.updateMessages();
    this.control.valueChanges.takeUntil(this.ngUnsubscribe).subscribe(() => {
      this.updateMessages();
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private updateMessages() {
    this.first = this.validationMessages.getFirst(this.control);
    this.array = this.validationMessages.getArray(this.control);
    this.dictionary = this.validationMessages.getDictionary(this.control);
  }
}
