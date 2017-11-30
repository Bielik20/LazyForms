import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared.module';
import {FormArrayExampleComponent} from './form-array-example.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{path: '', component: FormArrayExampleComponent}])
  ],
  declarations: [FormArrayExampleComponent]
})
export class FormArrayExampleModule {}
