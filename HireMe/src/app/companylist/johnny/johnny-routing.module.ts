import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JohnnyPage } from './johnny.page';

const routes: Routes = [
  {
    path: '',
    component: JohnnyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JohnnyPageRoutingModule {}
