import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared.module';
import {DecoratorsFormExampleComponent} from './decorators-form-example.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{path: '', component: DecoratorsFormExampleComponent}])
  ],
  declarations: [
    DecoratorsFormExampleComponent,
  ],
})
export class DecoratorsFormExampleModule {}
