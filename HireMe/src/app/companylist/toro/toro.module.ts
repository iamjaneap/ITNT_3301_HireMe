import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToroPageRoutingModule } from './toro-routing.module';

import { ToroPage } from './toro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToroPageRoutingModule
  ],
  declarations: [ToroPage]
})
export class ToroPageModule {}
