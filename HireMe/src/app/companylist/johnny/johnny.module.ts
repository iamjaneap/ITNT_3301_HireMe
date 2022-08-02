import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JohnnyPageRoutingModule } from './johnny-routing.module';

import { JohnnyPage } from './johnny.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JohnnyPageRoutingModule
  ],
  declarations: [JohnnyPage]
})
export class JohnnyPageModule {}
