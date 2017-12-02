import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
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

  private addChildControl() {
    this.lazySelectorService.addControl(this.componentInstance.metadata.key, this.componentInstance.control);
  }

  private removeChildControl() {
    this.lazySelectorService.removeControl(this.componentInstance.metadata.key, this.componentInstance.control);
  }

  private loadComponent() {
    const viewContainerRef = this.clearComponent();
    const componentRef = viewContainerRef.createComponent(this.getComponentFactory());
    this.componentInstance = componentRef.instance;
    this.setValueAndMetadata();
    this.setControl();
    this.addChildControlIfExists();
    this.setHooks(componentRef);
  }

  private clearComponent(): ViewContainerRef {
    const viewContainerRef = this.lazyHost.viewContainerRef;
    viewContainerRef.clear();
    return viewContainerRef;
  }

  private getComponentFactory(): ComponentFactory<LazyInputComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(this.metadata.component);
  }

  private addChildControlIfExists() {
    console.log(this.metadata.key, !!this.componentInstance.control);
    if (!!this.componentInstance.control) {
      this.addChildControl();
    }
  }

  private setValueAndMetadata() {
    this.componentInstance.value = cloneDeep(this.value);
    this.componentInstance.metadata = this.metadata;
  }

  private setControl() {
    let _val = this.componentInstance['control'];

    this.componentInstance.controlSetStart = new Subject();
    this.componentInstance.controlSetEnd = new Subject();

    // property getter
    const getter = function () {
      return _val;
    };

    // property setter
    const setter = function (newVal) {
      this.controlSetStart.next();
      _val = newVal;
      this.controlSetEnd.next();
    };

    // Delete property.
    if (delete this.componentInstance['control']) {
      // Create new property with getter and setter
      Object.defineProperty(this.componentInstance, 'control', {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
      });
    }
  }

  private setHooks(componentRef: ComponentRef<LazyInputComponent>) {
    componentRef.onDestroy(() => this.removeChildControl());
    this.componentInstance.controlSetStart.takeUntil(this.ngUnsubscribe)
      .subscribe(() => {
        if (this.componentInstance.control) { this.removeChildControl(); }
      });
    this.componentInstance.controlSetEnd.takeUntil(this.ngUnsubscribe)
      .subscribe(() => {
        this.addChildControl();
      });
  }
}
