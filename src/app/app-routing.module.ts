import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'page-2',
    loadChildren: () =>
      import('./test/test-page/test-page.module').then((m) => m.TestPageModule),
  },
  {
    path: 'proba',
    loadChildren: () =>
      import('./proba/proba/proba.module').then((m) => m.ProbaModule),
  },
  {
    path: 'teste',
    loadChildren: () =>
      import('./teste/teste-page/teste-page.module').then(
        (m) => m.TestePageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
