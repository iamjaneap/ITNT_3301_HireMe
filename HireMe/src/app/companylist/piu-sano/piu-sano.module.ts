import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PiuSanoPageRoutingModule } from './piu-sano-routing.module';

import { PiuSanoPage } from './piu-sano.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PiuSanoPageRoutingModule
  ],
  declarations: [PiuSanoPage]
})
export class PiuSanoPageModule {}
