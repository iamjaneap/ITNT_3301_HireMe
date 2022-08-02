import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrotherPageRoutingModule } from './brother-routing.module';

import { BrotherPage } from './brother.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrotherPageRoutingModule
  ],
  declarations: [BrotherPage]
})
export class BrotherPageModule {}
