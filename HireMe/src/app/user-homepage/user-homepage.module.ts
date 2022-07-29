import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserHomepagePageRoutingModule } from './user-homepage-routing.module';

import { UserHomepagePage } from './user-homepage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserHomepagePageRoutingModule
  ],
  declarations: [UserHomepagePage]
})
export class UserHomepagePageModule {}
