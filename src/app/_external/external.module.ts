import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import {LazyFormModule} from '../_frameworks/lazy-forms';
import {DefaulControlComponent} from './default-control/default-control.component';
import {NestedFormControlComponent} from './nested-form-control/nested-form-control.component';
import {FormArrayControlComponent} from './form-array-control/form-array-control.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    LazyFormModule,
  ],
  declarations: [
    DefaulControlComponent,
    NestedFormControlComponent,
    FormArrayControlComponent,
  ],
  entryComponents: [
    DefaulControlComponent,
    NestedFormControlComponent,
    FormArrayControlComponent,
  ]
})
export class ExternalModule {}
