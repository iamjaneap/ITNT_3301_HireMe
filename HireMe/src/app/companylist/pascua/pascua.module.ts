import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PascuaPageRoutingModule } from './pascua-routing.module';

import { PascuaPage } from './pascua.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PascuaPageRoutingModule
  ],
  declarations: [PascuaPage]
})
export class PascuaPageModule {}
