import {Component, OnInit} from '@angular/core';
import {Greeter} from './DecoratorsTest/TestClass';
import {C} from './DecoratorsTest/TestClass2';
import {getMetadata, MetadataTest, SampleClass} from './DecoratorsTest/TestClass3';

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

    // const myMetadataTest = new MetadataTest();
    // console.log(myMetadataTest.getMetadata('testProperty'));


    const myMetadataTest = new MetadataTest();
    const a = myMetadataTest.getMetadata('testProperty');
    const b = getMetadata<SampleClass>('testProperty', myMetadataTest);
    console.log(a);

  }
}
