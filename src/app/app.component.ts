import {Component, OnInit} from '@angular/core';
import {getMetadata, MetadataTest, SampleClass} from './DecoratorsTest/metadata-test';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  click() {
    const myMetadataTest = new MetadataTest();
    const a = myMetadataTest.getMetadata('testProperty');
    const b = getMetadata<SampleClass>('testProperty', myMetadataTest);
    console.log(a);
    // myMetadataTest.testProperty = 'aaa';
    // myMetadataTest.testProperty;
  }
}
