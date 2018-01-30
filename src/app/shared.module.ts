import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { ExternalModule } from './_external/external.module';
import { LazyFormModule } from './_frameworks/lazy-forms';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    LazyFormModule,
    ExternalModule,
  ],
  declarations: [],
  exports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    LazyFormModule,
    ExternalModule,
  ]
})
export class SharedModule {}
