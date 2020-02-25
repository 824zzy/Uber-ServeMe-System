import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceConfirmPageRoutingModule } from './service-confirm-routing.module';

import { ServiceConfirmPage } from './service-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceConfirmPageRoutingModule
  ],
  declarations: [ServiceConfirmPage]
})
export class ServiceConfirmPageModule {}
