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
    console.log('LazySelector Init', this.value);
    this.loadComponent();
    this.lazySelectorService.onReset.takeUntil(this.ngUnsubscribe).subscribe(() => {
      this.loadComponent();
    });
  }

  ngOnDestroy() {
    console.log(this.componentInstance['formControl'].value);
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
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
