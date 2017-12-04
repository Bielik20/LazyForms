import {DefaultControlMetadata} from '../_external/default-control/default-control.component';
import {FormArrayControlMetadata} from '../_external/form-array-control/form-array-control.component';
import {metadata, MetadataAccessor} from '../_external/metadata.models';

export class FormArrayExampleModel extends MetadataAccessor {
  @metadata(new DefaultControlMetadata({
    label: 'Label for Title',
    placeholder: 'My placeholder'
  }))
  title: string;

  @metadata(new FormArrayControlMetadata({minLength: 4}))
  array: string[];

  constructor(options: {} = {}) {
    super();
    this.array = options['array'] || [];
  }
}
