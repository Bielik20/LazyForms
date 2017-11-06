import {AbstractControl} from '@angular/forms';

export abstract class LazyInputService {
  addControlAndReportReady(name: string, control: AbstractControl) { }
}
