import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ServiceMapPageRoutingModule } from './service-map-routing.module';
import { ComponentsModule } from '../../components/components.module'
import { ServiceMapPage } from './service-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ServiceMapPageRoutingModule
  ],
  declarations: [ServiceMapPage]
})
export class ServiceMapPageModule {}
