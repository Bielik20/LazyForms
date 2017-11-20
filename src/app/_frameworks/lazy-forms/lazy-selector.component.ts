import {
  Component, ComponentFactory, ComponentFactoryResolver, Input, OnChanges, OnDestroy, OnInit,
  ViewChild
} from '@angular/core';
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
export class LazySelectorComponent implements OnInit, OnChanges, OnDestroy {

  @Input() value: any;
  @Input() metadata: LazyMetadata;
  @ViewChild(LazyHostDirective) lazyHost: LazyHostDirective;
  private componentInstance: LazyInputComponent;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private lazySelectorService: LazySelectorService) { }

  ngOnInit() {
    this.loadComponent();
    this.lazySelectorService.onReset.takeUntil(this.ngUnsubscribe).subscribe(() => this.loadComponent());
  }

  /** Ensures passage of value from a parent component to a child. */
  ngOnChanges() {
    // Only value needs to be updated because it can be primitive
    if (this.componentInstance) { this.componentInstance.value = this.value; }
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private loadComponent() {
    const componentFactory = this.getComponentFactory();
    const viewContainerRef = this.lazyHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    this.componentInstance = componentRef.instance;
    this.componentInstance.value = this.value;
    this.componentInstance.metadata = this.metadata;
  }

  private getComponentFactory(): ComponentFactory<LazyInputComponent> {
    if (this.value instanceof Array) {
      console.log('Value is Array');
      // TODO: Here it should return factory for an array
    }
    return this.componentFactoryResolver.resolveComponentFactory(this.metadata.component);
  }

}
