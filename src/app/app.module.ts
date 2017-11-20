import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import 'reflect-metadata';
import {ValidationMessagesService} from './_frameworks/validation-messages/validation-messages.service';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [ValidationMessagesService.provide()],
  bootstrap: [AppComponent]
})
export class AppModule {}
