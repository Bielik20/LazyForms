import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import {LazyFormModule} from '../_frameworks/lazy-forms';
import {DefaultInputComponent} from './default-input/default-input.component';
import {NestedFormInputComponent} from './nested-form-input/nested-form-input.component';
import {FormArrayInputComponent} from './form-array-input/form-array-input.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    LazyFormModule,
  ],
  declarations: [
    DefaultInputComponent,
    NestedFormInputComponent,
    FormArrayInputComponent,
  ],
  entryComponents: [
    DefaultInputComponent,
    NestedFormInputComponent,
    FormArrayInputComponent,
  ]
})
export class ExternalModule {}
