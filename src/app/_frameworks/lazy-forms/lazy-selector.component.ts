import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  Input,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import cloneDeep from 'lodash-es/cloneDeep';
import 'rxjs/add/operator/takeUntil';
import {Subject} from 'rxjs/Subject';
import {LazyFormService} from './lazy-form.service';
import {LazyHostDirective} from './lazy-host.directive';
import {LazyInputComponent} from './lazy-input.component';
import {LazyMetadata} from './lazy-metadata';
import {LazySelectorService} from './lazy-selector.service';

@Component({
  selector: 'lazy-selector',
  template: `
    <ng-template lazyHost (onDestroy)="onChildDestroy()" (afterViewInit)="afterChildViewInit()"></ng-template>
  `,
})
export class LazySelectorComponent implements OnInit, OnDestroy {
  @Input() value: any;
  @Input() metadata: LazyMetadata;
  @ViewChild(LazyHostDirective) lazyHost: LazyHostDirective;
  private componentInstance: LazyInputComponent;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              // private lazySelectorService: LazySelectorService,
              private lazySelectorService: LazyFormService) { }

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

  afterChildViewInit() {
    console.log('afterChildViewInit');
    this.lazySelectorService.addControl(this.componentInstance.metadata.key, this.componentInstance.control);
  }

  onChildDestroy() {
    console.log('onChildDestroy');
    this.lazySelectorService.removeControl(this.componentInstance.metadata.key, this.componentInstance.control);
  }

  private loadComponent() {
    const componentFactory = this.getComponentFactory();
    const viewContainerRef = this.lazyHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    this.componentInstance = componentRef.instance;
    this.componentInstance.value = cloneDeep(this.value);
    this.componentInstance.metadata = this.metadata;
  }

  private getComponentFactory(): ComponentFactory<LazyInputComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(this.metadata.component);
  }
}
