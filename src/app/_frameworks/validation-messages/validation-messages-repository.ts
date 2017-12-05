export class ValidationMessagesRepository {
  [key: string]: (validationObject: any) => string;

  protected min(validationObject: any): string {
    const min = validationObject.min;
    return `Value cannot be lower than ${min}`;
  }

  protected max(validationObject: any): string {
    const max = validationObject.max;
    return `Value cannot be higher than ${max}`;
  }

  protected required(validationObject: any): string {
    return `This field cannot be empty`;
  }

  protected email(validationObject: any): string {
    return `Mail needs to be in appropriate format`;
  }

  protected minlength(validationObject: any): string {
    const requiredLength = validationObject.requiredLength;
    return `This field needs to contain at least ${requiredLength}`;
  }

  protected maxlength(validationObject: any): string {
    const requiredLength = validationObject.requiredLength;
    return `This field cannot be greater than ${requiredLength}`;
  }

  protected pattern(validationObject: any): string {
    const requiredPattern = validationObject.requiredPattern;
    return `This field needs to follow patter ${requiredPattern}`;
  }
}
