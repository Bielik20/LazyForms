import { FormControl, Validators } from '@angular/forms';
import { ValMsg } from './val-msg';

describe('ValMsg', () => {
  let fullForm: FormControl;
  let emptyForm: FormControl;

  beforeEach(() => {
    fullForm = new FormControl(4, [Validators.required, Validators.min(5), Validators.max(3)]);
    emptyForm = new FormControl(null);
  });

  it('should create Form instances', () => {
    expect(fullForm).toBeTruthy();
    expect(emptyForm).toBeTruthy();
  });

  it('should create ValMsg instances', () => {
    const fullMsg = new ValMsg(fullForm);
    expect(fullMsg).toBeTruthy();
    const emptyMsg = new ValMsg(emptyForm);
    expect(emptyMsg).toBeTruthy();
  });
});

describe('ValMsgFirst', () => {
  let fullForm: FormControl;
  let emptyForm: FormControl;

  beforeEach(() => {
    fullForm = new FormControl(4, [Validators.required, Validators.min(5), Validators.max(3)]);
    emptyForm = new FormControl(null);
  });

  it('should get full', () => {
    const fullMsg = new ValMsg(fullForm);
    expect(fullMsg.first).toBeTruthy();
  });

  it('should get empty', () => {
    const emptyMsg = new ValMsg(emptyForm);
    expect(emptyMsg.first).toBeNull();
  });

  it('should get custom message', () => {
    const fullMsg = new ValMsg(fullForm, { min: '{{min}} is my lucky {{min}}' });
    expect(fullMsg.first).toEqual('5 is my lucky 5');
  });
});

describe('ValMsgArray', () => {
  let fullForm: FormControl;
  let emptyForm: FormControl;

  beforeEach(() => {
    fullForm = new FormControl(4, [Validators.required, Validators.min(5), Validators.max(3)]);
    emptyForm = new FormControl(null);
  });

  it('should get full', () => {
    const fullMsg = new ValMsg(fullForm);
    expect(fullMsg.array.length).toEqual(2);
  });

  it('should get full twice', () => {
    const fullMsg = new ValMsg(fullForm);
    expect(fullMsg.array.length).toEqual(2);
    expect(fullMsg.array.length).toEqual(2);
  });

  it('should get empty', () => {
    const emptyMsg = new ValMsg(emptyForm);
    expect(emptyMsg.array.length).toEqual(0);
  });
});

describe('ValMsgDictionary', () => {
  let fullForm: FormControl;
  let emptyForm: FormControl;

  beforeEach(() => {
    fullForm = new FormControl(4, [Validators.required, Validators.min(5), Validators.max(3)]);
    emptyForm = new FormControl(null);
  });

  it('should get full', () => {
    const fullMsg = new ValMsg(fullForm);
    expect(fullMsg.dictionary['min']).toBeTruthy();
    expect(fullMsg.dictionary['max']).toBeTruthy();
    expect(fullMsg.dictionary['required']).toBeUndefined();
  });

  it('should get empty', () => {
    const emptyMsg = new ValMsg(emptyForm);
    expect(emptyMsg.dictionary).toEqual(({} as Map<string, string>));
  });
});
