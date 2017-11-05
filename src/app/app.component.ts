import {Component, OnInit} from '@angular/core';
import {Greeter} from './DecoratorsTest/TestClass';
import {C} from './DecoratorsTest/TestClass2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  click() {
    // let obj = new C();
    // let metadataValue = Reflect.getMetadata('metadataKey', obj, "method");
    // console.log(metadataValue)

    const test = new Greeter('test message');
    test.greet();
    // const a = Reflect.getMetadata('format', test, 'greeting');
    // console.log(a)
  }
}
