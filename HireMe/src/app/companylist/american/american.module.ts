import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmericanPageRoutingModule } from './american-routing.module';

import { AmericanPage } from './american.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmericanPageRoutingModule
  ],
  declarations: [AmericanPage]
})
export class AmericanPageModule {}
