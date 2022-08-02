import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChicoPageRoutingModule } from './chico-routing.module';

import { ChicoPage } from './chico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChicoPageRoutingModule
  ],
  declarations: [ChicoPage]
})
export class ChicoPageModule {}
