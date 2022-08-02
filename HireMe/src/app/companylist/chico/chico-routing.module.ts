import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChicoPage } from './chico.page';

const routes: Routes = [
  {
    path: '',
    component: ChicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChicoPageRoutingModule {}
