import {DefaultInputMetadata} from '../_external/default-input/default-input.component';
import {metadata, MetadataAccessor} from '../_external/metadata.models';
import {UserModel} from '../decorators-form-example/model';
import {NestedFormInputMetadata} from '../_external/nested-form-input/nested-form-input.component';

export class NestedFormExampleModel extends MetadataAccessor {
  @metadata(new DefaultInputMetadata({
    label: 'Title',
  }))
  title: string;

  @metadata(new NestedFormInputMetadata())
  userModel: UserModel;

  constructor(options: {} = {}) {
    super();
    this.title = options['title'] || null;
    this.userModel = new UserModel(options['userModel']);
  }
}
