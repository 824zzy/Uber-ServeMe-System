import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendorPageRoutingModule } from './vendor-routing.module';

import { VendorPage } from './vendor.page';
import { ComponentsModule } from '../../components/components.module'
import { VendorhomePopoverComponent } from '../../components/vendorhome-popover/vendorhome-popover.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendorPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [VendorPage],
  entryComponents: [
    VendorhomePopoverComponent,
  ]
})
export class VendorPageModule {}
