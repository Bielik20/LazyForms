import {Directive, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {LazySelectorService} from './lazy-selector.service';
import {LazyFormService} from './lazy-form.service';
import {LazyInputService} from './lazy-input.service';

@Directive({
  selector: '[lazyForm]',
  providers: [
    LazyFormService,
    {provide: LazySelectorService, useExisting: LazyFormService},
    {provide: LazyInputService, useExisting: LazyFormService}
  ],
})
export class LazyFormDirective implements OnInit, OnChanges {

  @Input() formGroup: FormGroup;
  /** All subscriptions and form related tasks should be done here. */
  @Output() onFormComplete = new EventEmitter();

  constructor(private elementRef: ElementRef, private lazyFormService: LazyFormService) { }

  ngOnInit() {
    this.lazyFormService.configure(this.onFormComplete, this.fieldsCount);
    this.lazyFormService.initialize(this.formGroup);
  }

  ngOnChanges() {
    this.lazyFormService.reinitialize(this.formGroup);
  }

  private get fieldsCount(): number {
    return this.elementRef.nativeElement.querySelectorAll('lazy-selector').length;
  }

}
