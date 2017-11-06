import {Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import 'rxjs/add/operator/takeUntil';
import {Subject} from 'rxjs/Subject';
import {LazySelectorService} from './lazy-selector.service';
import {LazyHostDirective} from './lazy-host.directive';
import {LazyMetadata} from './lazy-metadata';
import {LazyInputComponent} from './lazy-input.component';

@Component({
  selector: 'lazy-selector',
  template: `
    <ng-template lazyHost></ng-template>
  `,
})
export class LazySelectorComponent implements OnInit, OnDestroy {

  @Input() value: any;
  @Input() metadata: LazyMetadata;
  @ViewChild(LazyHostDirective) lazyHost: LazyHostDirective;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private lazySelectorService: LazySelectorService) { }

  ngOnInit() {
    this.loadComponent();
    this.lazySelectorService.onReset.takeUntil(this.ngUnsubscribe).subscribe(() => this.loadComponent());
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.metadata.component);

    const viewContainerRef = this.lazyHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<LazyInputComponent>componentRef.instance).value = this.value;
    (<LazyInputComponent>componentRef.instance).metadata = this.metadata;
  }

}
