import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared.module';
import {ComplexFormArrayExampleComponent} from './complex-form-array-example.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{path: '', component: ComplexFormArrayExampleComponent}])
  ],
  declarations: [ComplexFormArrayExampleComponent]
})
export class ComplexFormArrayExampleModule {}
