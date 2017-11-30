import {AbstractControl} from '@angular/forms';
import {Subject} from 'rxjs/Subject';
import {LazyMetadata} from './lazy-metadata';

export abstract class LazyInputComponent {
  abstract value: any;
  abstract metadata: LazyMetadata;
  abstract control: AbstractControl;
}

export abstract class LazyInputComponentExtended extends LazyInputComponent {
  controlSetStart: Subject<any>;
  controlSetEnd: Subject<any>;

  static supplement(target: LazyInputComponent): LazyInputComponentExtended {
    // supply subjects
    (target as LazyInputComponentExtended).controlSetStart = new Subject();
    (target as LazyInputComponentExtended).controlSetEnd = new Subject();

    // property value
    let _control = target['control'];

    // property getter
    const getter = function () {
      return _control;
    };

    // property setter
    const setter = function (newValue) {
      this.controlSetStart.next();
      _control = newValue;
      this.controlSetEnd.next();
    };

    // Delete property.
    if (delete target['control']) {
      // Create new property with getter and setter
      Object.defineProperty(target, 'control', {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
      });
    }

    return target as LazyInputComponentExtended;
  }
}
