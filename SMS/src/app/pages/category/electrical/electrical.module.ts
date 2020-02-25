import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElectricalPageRoutingModule } from './electrical-routing.module';

import { ElectricalPage } from './electrical.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElectricalPageRoutingModule
  ],
  declarations: [ElectricalPage]
})
export class ElectricalPageModule {}
