import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import {LazyFormModule} from '../_frameworks/lazy-forms';
import {DefaultControlComponent} from './default-control/default-control.component';
import {NestedFormControlComponent} from './nested-form-control/nested-form-control.component';
import {FormArrayControlComponent} from './form-array-control/form-array-control.component';
import {ValidationMessagesComponent} from './validation-messages/validation-messages.component';
import { ComplexFormArrayControlComponent } from './complex-form-array-control/complex-form-array-control.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    LazyFormModule,
  ],
  declarations: [
    ValidationMessagesComponent,
    DefaultControlComponent,
    NestedFormControlComponent,
    FormArrayControlComponent,
    ComplexFormArrayControlComponent,
  ],
  entryComponents: [
    DefaultControlComponent,
    NestedFormControlComponent,
    FormArrayControlComponent,
    ComplexFormArrayControlComponent,
  ]
})
export class ExternalModule {}
