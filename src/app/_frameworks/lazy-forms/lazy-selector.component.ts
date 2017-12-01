import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver, ComponentRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild, ViewContainerRef
} from '@angular/core';
import cloneDeep from 'lodash-es/cloneDeep';
import 'rxjs/add/operator/takeUntil';
import {Subject} from 'rxjs/Subject';
import {LazyHostDirective} from './lazy-host.directive';
import {LazyInputComponent} from './lazy-input.component';
import {LazyMetadata} from './lazy-metadata';
import {LazySelectorService} from './lazy-selector.service';

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
  private componentInstance: LazyInputComponent;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private lazySelectorService: LazySelectorService) { }

  ngOnInit() {
    this.loadComponent();
    this.lazySelectorService.onReset.takeUntil(this.ngUnsubscribe).subscribe(() => {
      this.loadComponent();
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  addChildControl() {
    this.lazySelectorService.addControl(this.componentInstance.metadata.key, this.componentInstance.control);
  }

  removeChildControl() {
    this.lazySelectorService.removeControl(this.componentInstance.metadata.key, this.componentInstance.control);
  }

  private loadComponent() {
    const viewContainerRef = this.clearComponent();
    const componentRef = this.createComponent(viewContainerRef);
    this.setHooks(componentRef);
  }

  private clearComponent() {
    const viewContainerRef = this.lazyHost.viewContainerRef;
    viewContainerRef.clear();
    return viewContainerRef;
  }

  private createComponent(viewContainerRef: ViewContainerRef) {
    const componentRef = viewContainerRef.createComponent(this.getComponentFactory());
    this.componentInstance = componentRef.instance;
    this.componentInstance.value = cloneDeep(this.value);
    this.componentInstance.metadata = cloneDeep(this.metadata);
    return componentRef;
  }

  private getComponentFactory(): ComponentFactory<LazyInputComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(this.metadata.component);
  }

  private setHooks(componentRef: ComponentRef<LazyInputComponent>) {
    componentRef.onDestroy(() => this.removeChildControl());
    // TODO: It should be done differently. User should not have to run reportReady command.
    this.componentInstance.reportReady.subscribe(() => this.addChildControl());
  }
}
