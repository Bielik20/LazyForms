import {AbstractControl} from '@angular/forms';
import {LazyMetadata} from './lazy-metadata';

export abstract class LazyInputComponent {
  value: any;
  metadata: LazyMetadata;
  control: AbstractControl;
}
