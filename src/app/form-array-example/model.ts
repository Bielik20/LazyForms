import {DefaultInputMetadata} from '../_external/default-input/default-input.component';
import {FormArrayInputMetadata} from '../_external/form-array-input/form-array-input.component';
import {metadata, MetadataAccessor} from '../_external/metadata.models';

export class FormArrayExampleModel extends MetadataAccessor {
  @metadata(new DefaultInputMetadata({
    label: 'Label for Title',
    placeholder: 'My placeholder'
  }))
  title: string;

  @metadata(new FormArrayInputMetadata({minLength: 4}))
  array: string[];

  constructor(options: {} = {}) {
    super();
    this.array = options['array'] || [];
  }
}
