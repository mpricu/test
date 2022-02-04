import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestePageComponent } from './teste-page.component';

const routes: Routes = [{ path: '', component: TestePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestePageRoutingModule { }
