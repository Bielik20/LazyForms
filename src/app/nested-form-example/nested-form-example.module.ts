import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared.module';
import {NestedFormExampleComponent} from './nested-form-example.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{path: '', component: NestedFormExampleComponent}])
  ],
  declarations: [
    NestedFormExampleComponent,
  ],
})
export class NestedFormExampleModule {}
