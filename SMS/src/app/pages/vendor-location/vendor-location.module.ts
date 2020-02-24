import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendorLocationPageRoutingModule } from './vendor-location-routing.module';

import { VendorLocationPage } from './vendor-location.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendorLocationPageRoutingModule
  ],
  declarations: [VendorLocationPage]
})
export class VendorLocationPageModule {}
