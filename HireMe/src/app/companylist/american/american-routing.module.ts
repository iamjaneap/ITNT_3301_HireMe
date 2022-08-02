import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmericanPage } from './american.page';

const routes: Routes = [
  {
    path: '',
    component: AmericanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmericanPageRoutingModule {}
