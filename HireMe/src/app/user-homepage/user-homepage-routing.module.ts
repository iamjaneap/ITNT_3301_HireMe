import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserHomepagePage } from './user-homepage.page';

const routes: Routes = [
  {
    path: '',
    component: UserHomepagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserHomepagePageRoutingModule {}
