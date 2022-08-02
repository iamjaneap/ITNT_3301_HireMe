import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BocoffeePage } from './bocoffee.page';

const routes: Routes = [
  {
    path: '',
    component: BocoffeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BocoffeePageRoutingModule {}
