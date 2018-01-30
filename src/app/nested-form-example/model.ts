import { DefaultControlMetadata } from '../_external/default-control/default-control.component';
import { metadata, MetadataAccessor } from '../_external/metadata.models';
import { NestedFormControlMetadata } from '../_external/nested-form-control/nested-form-control.component';
import { UserModel } from '../decorators-form-example/model';

export class NestedFormExampleModel extends MetadataAccessor {
  @metadata(new DefaultControlMetadata({
    label: 'Title',
  }))
  title: string;

  @metadata(new NestedFormControlMetadata())
  userModel: UserModel;

  constructor(options: {} = {}) {
    super();
    this.title = options['title'] || null;
    this.userModel = new UserModel(options['userModel']);
  }
}
