import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared.module';
import {NoDecoratorsFormExampleComponent} from './no-decorators-form-example.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{path: '', component: NoDecoratorsFormExampleComponent}])
  ],
  declarations: [
    NoDecoratorsFormExampleComponent,
  ],
})
export class NoDecoratorsFormExampleModule {}
