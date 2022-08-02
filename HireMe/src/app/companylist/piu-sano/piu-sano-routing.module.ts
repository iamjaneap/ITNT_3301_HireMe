import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PiuSanoPage } from './piu-sano.page';

const routes: Routes = [
  {
    path: '',
    component: PiuSanoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PiuSanoPageRoutingModule {}
