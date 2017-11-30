import {AbstractControl} from '@angular/forms';

export abstract class LazyInputService {
  addControl(name: string, control: AbstractControl) { }
}
