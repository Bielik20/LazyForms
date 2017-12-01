import {FormArrayInputMetadata} from '../_external/form-array-input/form-array-input.component';
import {metadata, MetadataAccessor} from '../_external/metadata.models';

export class FormArrayExampleModel extends MetadataAccessor {
  @metadata(new FormArrayInputMetadata())
  array: string[];

  constructor(options: {} = {}) {
    super();
    this.array = options['array'] || [];
  }
}
