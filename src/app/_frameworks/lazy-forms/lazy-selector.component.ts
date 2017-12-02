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
import {LazyInputComponent, LazyInputComponentExtended} from './lazy-input.component';
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
  private child: LazyInputComponentExtended;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private lazySelectorService: LazySelectorService) { }

  ngOnInit() {
    this.loadChild();
    this.lazySelectorService.onReset.takeUntil(this.ngUnsubscribe).subscribe(() => {
      this.loadChild();
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private addChildControl() {
    this.lazySelectorService.addControl(this.child.metadata.key, this.child.control);
  }

  private addChildControlIfExists() {
    if (!!this.child.control) {
      console.warn('LazyForms: "control" assignment in constructor. Consider using ngOnInit.', this.child);
      this.addChildControl();
    }
  }

  private removeChildControl() {
    this.lazySelectorService.removeControl(this.child.metadata.key, this.child.control);
  }

  private loadChild() {
    const viewContainerRef = this.clearComponent();
    const componentRef = viewContainerRef.createComponent(this.getComponentFactory());
    this.child = LazyInputComponentExtended.supplement(componentRef.instance);
    this.setChildValueAndMetadata();
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

  private setChildValueAndMetadata() {
    this.child.value = cloneDeep(this.value);
    this.child.metadata = this.metadata;
  }

  private setHooks(componentRef: ComponentRef<LazyInputComponent>) {
    componentRef.onDestroy(() => this.removeChildControl());
    this.child.controlSetStart.takeUntil(this.ngUnsubscribe)
      .subscribe(() => {
        if (this.child.control) { this.removeChildControl(); }
      });
    this.child.controlSetEnd.takeUntil(this.ngUnsubscribe)
      .subscribe(() => {
        this.addChildControl();
      });
  }
}
