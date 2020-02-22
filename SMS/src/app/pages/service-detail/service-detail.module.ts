import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceDetailPageRoutingModule } from './service-detail-routing.module';

import { ServiceDetailPage } from './service-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceDetailPageRoutingModule
  ],
  declarations: [ServiceDetailPage]
})
export class ServiceDetailPageModule {}
