import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddServicePageRoutingModule } from './add-service-routing.module';

import { AddServicePage } from './add-service.page';
// import { Geolocation } from '@ionic-native/geolocation/';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddServicePageRoutingModule
  ],
  declarations: [AddServicePage],
})
export class AddServicePageModule {}
