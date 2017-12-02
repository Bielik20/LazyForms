import {AbstractControl} from '@angular/forms';
import {Subject} from 'rxjs/Subject';
import {LazyMetadata} from './lazy-metadata';

export abstract class LazyInputComponent {
  abstract value: any;
  abstract metadata: LazyMetadata;
  abstract control: AbstractControl;
  controlSetStart?: Subject<any>;
  controlSetEnd?: Subject<any>;
}
