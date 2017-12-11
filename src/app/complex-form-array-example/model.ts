import {ComplexFormArrayControlMetadata} from '../_external/complex-form-array-control/complex-form-array-control.component';
import {DefaultControlMetadata} from '../_external/default-control/default-control.component';
import {metadata, MetadataAccessor} from '../_external/metadata.models';
import {UserModel} from '../decorators-form-example/model';

export class ComplexFormArrayExampleModel extends MetadataAccessor {
  @metadata(new DefaultControlMetadata({
    label: 'Label for Title',
    placeholder: 'My placeholder'
  }))
  title: string;

  @metadata(new ComplexFormArrayControlMetadata({minLength: 4}))
  array: UserModel[];

  constructor(options: {} = {}) {
    super();
    this.array = options['array'] || [];
  }
}
