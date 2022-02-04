import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProbaRoutingModule } from './proba-routing.module';
import { ProbaComponent } from './proba.component';


@NgModule({
  declarations: [ProbaComponent],
  imports: [
    CommonModule,
    ProbaRoutingModule
  ]
})
export class ProbaModule { }
