import {DefaultInputMetadata} from '../_external/default-input/default-input.component';
import {metadata, MetadataAccessor} from '../_external/metadata.models';

export class UserModel extends MetadataAccessor {
  @metadata(new DefaultInputMetadata({
    label: 'First Name',
    required: true,
  }))
  firstName: string;

  @metadata(new DefaultInputMetadata({
    label: 'Last Name',
  }))
  lastName: string;

  constructor(options: {} = {}) {
    super();
    this.firstName = options['firstName'] || null;
    this.lastName = options['lastName'] || null;
  }
}
