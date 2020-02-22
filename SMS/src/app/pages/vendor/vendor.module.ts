import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendorPageRoutingModule } from './vendor-routing.module';

import { VendorPage } from './vendor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendorPageRoutingModule
  ],
  declarations: [VendorPage]
})
export class VendorPageModule {}
