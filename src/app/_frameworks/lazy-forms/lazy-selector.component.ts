import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import cloneDeep from 'lodash-es/cloneDeep';
import 'rxjs/add/operator/takeUntil';
import {Subject} from 'rxjs/Subject';
import {LazyControlComponent, LazyControlComponentExtended} from './lazy-control.component';
import {LazyHostDirective} from './lazy-host.directive';
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
  @ViewChild(LazyHostDirective) host: LazyHostDirective;
  private child: LazyControlComponentExtended;
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
    const viewContainerRef = this.host.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(this.getComponentFactory());
    this.child = LazyControlComponentExtended.supplement(componentRef.instance);
    this.setChildValueAndMetadata();
    this.addChildControlIfExists();
    this.setHooks(componentRef);
  }

  private getComponentFactory(): ComponentFactory<LazyControlComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(this.metadata.component);
  }

  private setChildValueAndMetadata() {
    this.child.value = cloneDeep(this.value);
    this.child.metadata = this.metadata;
  }

  private setHooks(componentRef: ComponentRef<LazyControlComponent>) {
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
