import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import 'reflect-metadata';

import {AppComponent} from './app.component';
import {ExternalModule} from './_external/external.module';
import {LazyFormModule} from './_frameworks/lazy-forms';
import { NoDecoratorsFormComponent } from './no-decorators-form/no-decorators-form.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NoDecoratorsFormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    ExternalModule,
    LazyFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
