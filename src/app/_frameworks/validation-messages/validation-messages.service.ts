import {Injectable} from '@angular/core';
import {AbstractControl} from '@angular/forms';

class KeyMessagePair {
  key: string;
  message: string;
}

@Injectable()
export class ValidationMessagesService {

  getFirst(control: AbstractControl): string {
    const generator = this.getMessage(control);
    const result = generator.next().value;
    return result ? result.message : null;
  }

  getArray(control: AbstractControl): string[] {
    const array: string[] = [];
    const generator = this.getMessage(control);
    for (const result of generator) {
      array.push(result.message);
    }
    return array;
  }

  getDictionary(control: AbstractControl): any {
    const dictionary: any = {};
    const generator = this.getMessage(control);
    for (const result of generator) {
      dictionary[result.key] = result.message;
    }
    return dictionary;
  }

  private *getMessage(control: AbstractControl): IterableIterator<KeyMessagePair> {
    for (const errorKey in control.errors) {
      if (this.propertyAndMethodExist(control, errorKey)) {
        const messageMethod = this[errorKey];
        const validationObject = control.errors[errorKey];
        const validationMessage = messageMethod(validationObject);
        yield {key: errorKey, message: validationMessage};
      }
    }
    return;
  }

  private propertyAndMethodExist(control: AbstractControl, key: string): boolean {
    const propertyExists = control.errors.hasOwnProperty(key);
    const methodExists = typeof(this[key]) === 'function';
    return propertyExists && methodExists;
  }

  // VALIDATION MESSAGE METHODS
  protected min(validationObject: any): string {
    const min = validationObject.min;
    return `Value cannot be lower than ${min}.`;
  }

  protected max(validationObject: any): string {
    const max = validationObject.max;
    return `Value cannot be higher than ${max}.`;
  }

  protected required(validationObject: any): string {
    return `This field cannot be empty.`;
  }

  protected email(validationObject: any): string {
    return `Mail needs to be in appropriate format`;
  }

  protected minlength(validationObject: any): string {
    const requiredLength = validationObject.requiredLength;
    return `This field needs to contain at least ${requiredLength}`;
  }

}
