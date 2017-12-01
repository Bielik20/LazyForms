import {AfterViewInit, Directive, EventEmitter, OnDestroy, Output, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[lazyHost]'
})
export class LazyHostDirective implements AfterViewInit, OnDestroy {
  @Output() afterViewInit = new EventEmitter();
  @Output() onDestroy = new EventEmitter();

  constructor(public viewContainerRef: ViewContainerRef) { }

  ngAfterViewInit() {
    this.afterViewInit.emit();
  }

  ngOnDestroy() {
    this.onDestroy.emit();
  }
}
