import { AbstractControl } from '@angular/forms';

export class ValMsg {
  private _first: ValMsgFirst;
  get first(): string {
    return this._first.value;
  }

  private _array: ValMsgArray;
  get array(): string[] {
    return this._array.value;
  }

  private _dictionary: ValMsgDictionary;
  get dictionary(): Map<string, string> {
    return this._dictionary.value;
  }

  constructor(private control: AbstractControl, overrideRepo: {} = {}) {
    const repository = this.createRepository();
    for (const key in overrideRepo) {
      if (overrideRepo.hasOwnProperty(key)) {
        repository[key] = overrideRepo[key];
      }
    }
    const generator = new ValMsgGen(this.control, repository);
    this._first = new ValMsgFirst(this.control, generator);
    this._array = new ValMsgArray(this.control, generator);
    this._dictionary = new ValMsgDictionary(this.control, generator);
  }

  /** Override to change default ValMsgRepo. */
  protected createRepository(): ValMsgRepo {
    return new ValMsgRepo();
  }
}

abstract class ValMsgBase<T> {
  get value(): T {
    if (!this.isInitialized) { this.init(); }
    return this._value;
  }

  private _value: T;
  private isInitialized = false;

  constructor(private control: AbstractControl, protected generator: ValMsgGen) { }

  private init() {
    this.isInitialized = true;
    this._value = this.genValue();
    this.control.valueChanges.subscribe(() => {
      this._value = this.genValue();
    });
  }

  protected abstract genValue(): T;
}

class ValMsgFirst extends ValMsgBase<string> {
  protected genValue(): string {
    const generator = this.generator.create();
    const result = generator.next().value;
    return result ? result.message : null;
  }
}

class ValMsgArray extends ValMsgBase<string[]> {
  protected genValue(): string[] {
    const generator = this.generator.create();
    const array: string[] = [];
    for (const result of generator) {
      array.push(result.message);
    }
    return array;
  }
}

class ValMsgDictionary extends ValMsgBase<Map<string, string>> {
  protected genValue(): Map<string, string> {
    const generator = this.generator.create();
    const dictionary: any = {};
    for (const result of generator) {
      dictionary[result.key] = result.message;
    }
    return dictionary;
  }
}

export class ValMsgRepo {
  [key: string]: string;

  min = `Value cannot be lower than {{min}}`;
  max = `Value cannot be higher than {{max}}`;
  required = `This field cannot be empty`;
  email = `Mail needs to be in appropriate format`;
  minlength = `This field needs to contain at least {{requiredLength}}`;
  maxlength = `This field cannot be greater than {{requiredLength}}`;
  pattern = `This field needs to follow patter {{requiredPattern}}`;
}

class ValMsgGen {
  constructor(private control: AbstractControl, private repository: ValMsgRepo) { }

  * create(): IterableIterator<KeyMessagePair> {
    for (const errorKey in this.control.errors) {
      if (this.control.errors.hasOwnProperty(errorKey)) {
        const messageTemplate = this.repository[errorKey];
        const validationObject = this.control.errors[errorKey];
        if (messageTemplate) {
          const validationMessage = this.transformTemplate(messageTemplate, validationObject);
          yield { key: errorKey, message: validationMessage };
        } else {
          console.warn(`No message template for error: ${errorKey}`, validationObject);
        }
      }
    }
  }

  private transformTemplate(messageTemplate: string, validationObject: any): string {
    const startIndex = messageTemplate.indexOf('{{');
    const endIndex = messageTemplate.indexOf('}}');
    if (startIndex === -1 || endIndex === -1) { return messageTemplate; }

    const startIndexWithOffset = startIndex + 2;
    const key = messageTemplate.substring(startIndexWithOffset, endIndex);
    return this.transformTemplate(messageTemplate.replace(`{{${key}}}`, validationObject[key]), validationObject);
  }
}

interface KeyMessagePair {
  key: string;
  message: string;
}
