import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendorRequestPageRoutingModule } from './vendor-request-routing.module';

import { VendorRequestPage } from './vendor-request.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendorRequestPageRoutingModule
  ],
  declarations: [VendorRequestPage]
})
export class VendorRequestPageModule {}
