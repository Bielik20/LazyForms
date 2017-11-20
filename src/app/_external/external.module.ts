import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {LazyFormModule} from '../_frameworks/lazy-forms';
import {DefaultInputComponent} from './default-input/default-input.component';
import {NestedFormInputComponent} from './nested-form-input/nested-form-input.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LazyFormModule,
  ],
  declarations: [
    DefaultInputComponent,
    NestedFormInputComponent,
  ],
  entryComponents: [
    DefaultInputComponent,
    NestedFormInputComponent,
  ]
})
export class ExternalModule {}
