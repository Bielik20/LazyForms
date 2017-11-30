import {Directive, Input, OnChanges, OnInit} from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {LazyFormService} from './lazy-form.service';
import {LazyInputService} from './lazy-input.service';
import {LazySelectorService} from './lazy-selector.service';

@Directive({
  selector: '[lazyForm]',
  providers: [
    LazyFormService,
    {provide: LazySelectorService, useExisting: LazyFormService},
    {provide: LazyInputService, useExisting: LazyFormService}
  ],
})
export class LazyFormDirective implements OnInit, OnChanges {
  @Input() formGroup: AbstractControl;

  constructor(private lazyFormService: LazyFormService) { }

  ngOnInit() {
    this.lazyFormService.initialize(this.formGroup);
  }

  ngOnChanges() {
    this.lazyFormService.initialize(this.formGroup);
  }
}
