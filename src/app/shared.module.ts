import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {LazyFormModule} from './_frameworks/lazy-forms';
import {ExternalModule} from './_external/external.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LazyFormModule,
    ExternalModule,
  ],
  declarations: [],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    LazyFormModule,
    ExternalModule,
  ]
})
export class SharedModule {}
