import {DefaultInputMetadata} from '../_external/default-input/default-input.component';
import {FormArrayInputMetadata} from '../_external/form-array-input/form-array-input.component';
import {metadata, MetadataAccessor} from '../_external/metadata.models';

export class FormArrayExampleModel extends MetadataAccessor {
  @metadata(new DefaultInputMetadata({
    label: 'Title',
  }))
  title: string;

  @metadata(new FormArrayInputMetadata())
  array: string[];

  constructor(options: {} = {}) {
    super();
    this.title = options['title'] || null;
    this.array = options['array'] || [];
  }
}
