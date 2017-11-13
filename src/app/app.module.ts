import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import 'reflect-metadata';
import {ExternalModule} from './_external/external.module';
import {LazyFormModule} from './_frameworks/lazy-forms';

import {AppComponent} from './app.component';
import {DecoratorsFormComponent} from './decorators-form/decorators-form.component';
import {NoDecoratorsFormComponent} from './no-decorators-form/no-decorators-form.component';
import {ValidationMessagesService} from './_frameworks/validation-messages/validation-messages.service';

@NgModule({
  declarations: [
    AppComponent,
    NoDecoratorsFormComponent,
    DecoratorsFormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    ExternalModule,
    LazyFormModule,
  ],
  providers: [ValidationMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
