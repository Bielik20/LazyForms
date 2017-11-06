import {Component} from '@angular/core';
import {getLazyMetadata, MetadataTest, SampleClass} from './DecoratorsTest/metadata-test';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  click() {
    const myMetadataTest = new MetadataTest();
    const a = myMetadataTest.getMetadata('testProperty');
    const b = getLazyMetadata<SampleClass>('testProperty', myMetadataTest);
    console.log(a);
  }
}
