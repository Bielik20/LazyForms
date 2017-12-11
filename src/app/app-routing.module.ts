import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'no-decorators-form-example',
    loadChildren: 'app/no-decorators-form-example/no-decorators-form-example.module#NoDecoratorsFormExampleModule'
  },
  {
    path: 'decorators-form-example',
    loadChildren: 'app/decorators-form-example/decorators-form-example.module#DecoratorsFormExampleModule'
  },
  {
    path: 'nested-form-example',
    loadChildren: 'app/nested-form-example/nested-form-example.module#NestedFormExampleModule'
  },
  {
    path: 'form-array-example',
    loadChildren: 'app/form-array-example/form-array-example.module#FormArrayExampleModule'
  },
  {
    path: 'complex-form-array-example',
    loadChildren: 'app/complex-form-array-example/complex-form-array-example.module#ComplexFormArrayExampleModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
