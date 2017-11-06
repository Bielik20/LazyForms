import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {DefaultInputComponent} from './default-input/default-input.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DefaultInputComponent,
  ],
  entryComponents: [
    DefaultInputComponent,
  ]
})
export class ExternalModule {}
