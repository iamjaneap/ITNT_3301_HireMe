import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrotherPage } from './brother.page';

const routes: Routes = [
  {
    path: '',
    component: BrotherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrotherPageRoutingModule {}
