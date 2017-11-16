import {Injectable} from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {ValidationMessagesRepository} from './validation-messages-repository';

interface KeyMessagePair {
  key: string;
  message: string;
}

@Injectable()
export class ValidationMessagesService {
  private repository: ValidationMessagesRepository;

  constructor(repository: ValidationMessagesRepository = new ValidationMessagesRepository()) {
    this.repository = repository;
  }

  static provide(repository?: ValidationMessagesRepository) {
    return { provide: ValidationMessagesService, useFactory: () => new ValidationMessagesService(repository) };
  }

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

  private * getMessage(control: AbstractControl): IterableIterator<KeyMessagePair> {
    for (const errorKey in control.errors) {
      if (control.errors.hasOwnProperty(errorKey)) {
        const messageMethod = this.repository[errorKey];
        const validationObject = control.errors[errorKey];
        if (messageMethod) {
          const validationMessage = messageMethod(validationObject);
          yield {key: errorKey, message: validationMessage};
        } else {
          console.warn(`No message method for error: ${errorKey}`, validationObject);
        }
      }
    }
  }
}
