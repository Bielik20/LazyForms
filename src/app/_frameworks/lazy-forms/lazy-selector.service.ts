import {AbstractControl} from '@angular/forms';
import {Subject} from 'rxjs/Subject';

export abstract class LazySelectorService {
  onReset: Subject<any>;

  abstract addControl(name: string, control: AbstractControl);

  abstract removeControl(name: string, control: AbstractControl);
}
