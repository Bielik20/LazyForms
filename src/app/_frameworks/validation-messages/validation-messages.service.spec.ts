import {inject, TestBed} from '@angular/core/testing';
import {FormControl, Validators} from '@angular/forms';
import {ValidationMessagesService} from './validation-messages.service';

describe('ValidationMessagesService', () => {
  const control = new FormControl(4, [Validators.required, Validators.min(5), Validators.max(3)]);
  const empty = new FormControl(null);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidationMessagesService]
    });
  });

  it('should be created', inject([ValidationMessagesService], (service: ValidationMessagesService) => {
    expect(service).toBeTruthy();
  }));

  it('should get first', inject([ValidationMessagesService], (service: ValidationMessagesService) => {
    const message = service.getFirst(control);
    expect(message).toBeTruthy();
  }));
  it('should get first - empty', inject([ValidationMessagesService], (service: ValidationMessagesService) => {
    const message = service.getFirst(empty);
    expect(message).toBeNull();
  }));

  it('should get array', inject([ValidationMessagesService], (service: ValidationMessagesService) => {
    const messages = service.getArray(control);
    expect(messages.length).toEqual(2);
  }));
  it('should get array - empty', inject([ValidationMessagesService], (service: ValidationMessagesService) => {
    const messages = service.getArray(empty);
    expect(messages.length).toEqual(0);
  }));

  it('should get dictionary', inject([ValidationMessagesService], (service: ValidationMessagesService) => {
    const dictionary = service.getDictionary(control);
    expect(dictionary['min']).toBeTruthy();
    expect(dictionary['max']).toBeTruthy();
    expect(dictionary['required']).toBeUndefined();
  }));
  it('should get dictionary - empty', inject([ValidationMessagesService], (service: ValidationMessagesService) => {
    const dictionary = service.getDictionary(empty);
    expect(dictionary).toEqual({});
  }));
});
