import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MongkokbauanPageRoutingModule } from './mongkokbauan-routing.module';

import { MongkokbauanPage } from './mongkokbauan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MongkokbauanPageRoutingModule
  ],
  declarations: [MongkokbauanPage]
})
export class MongkokbauanPageModule {}
