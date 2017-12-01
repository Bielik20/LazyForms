import {AbstractControl} from '@angular/forms';
import {Subject} from 'rxjs/Subject';
import {LazyMetadata} from './lazy-metadata';

export abstract class LazyInputComponent {
  value: any;
  metadata: LazyMetadata;
  control: AbstractControl;
  // TODO: Should not be necessary
  reportReady: Subject<any>;
}
