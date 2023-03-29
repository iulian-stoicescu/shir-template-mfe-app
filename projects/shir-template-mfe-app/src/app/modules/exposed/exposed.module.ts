import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExposedRoutingModule } from './exposed-routing.module';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';


@NgModule({
  declarations: [
    FirstComponent,
    SecondComponent
  ],
  imports: [
    CommonModule,
    ExposedRoutingModule
  ]
})
export class ExposedModule { }
