import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BocoffeePageRoutingModule } from './bocoffee-routing.module';

import { BocoffeePage } from './bocoffee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BocoffeePageRoutingModule
  ],
  declarations: [BocoffeePage]
})
export class BocoffeePageModule {}
