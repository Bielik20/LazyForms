import { DefaultControlMetadata } from '../_external/default-control/default-control.component';
import { metadata, MetadataAccessor } from '../_external/metadata.models';

export class UserModel extends MetadataAccessor {
  @metadata(new DefaultControlMetadata({
    label: 'First Name',
    required: true,
  }))
  firstName: string;

  @metadata(new DefaultControlMetadata({
    label: 'Last Name',
  }))
  lastName: string;

  @metadata(new DefaultControlMetadata({
    label: 'Age',
    type: 'number',
    min: 10,
    max: 5,
  }))
  age: number;

  constructor(options: {} = {}) {
    super();
    this.firstName = options['firstName'] || null;
    this.lastName = options['lastName'] || null;
    this.age = options['age'] || null;
  }
}
