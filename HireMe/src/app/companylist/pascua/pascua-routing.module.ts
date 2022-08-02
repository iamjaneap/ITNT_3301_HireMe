import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PascuaPage } from './pascua.page';

const routes: Routes = [
  {
    path: '',
    component: PascuaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PascuaPageRoutingModule {}
