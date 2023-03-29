import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExposedModule } from './modules/exposed/exposed.module';
import { ExposedComponent } from './components/exposed/exposed.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'exposed-module',
    pathMatch: 'full'
  },
  {
    path: 'exposed-module',
    loadChildren: () => ExposedModule
  },
  {
    path: 'exposed-component',
    component: ExposedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
