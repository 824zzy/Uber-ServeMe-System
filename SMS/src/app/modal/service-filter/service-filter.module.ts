import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceFilterPageRoutingModule } from './service-filter-routing.module';

import { ServiceFilterPage } from './service-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceFilterPageRoutingModule
  ],
  declarations: [ServiceFilterPage]
})
export class ServiceFilterPageModule {}
