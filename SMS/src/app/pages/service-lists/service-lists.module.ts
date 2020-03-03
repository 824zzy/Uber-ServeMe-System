import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceListsPageRoutingModule } from './service-lists-routing.module';

import { ServiceListsPage } from './service-lists.page';
import { ComponentsModule } from '../../components/components.module'
import { ServiceMapPageModule } from '../../modal/service-map/service-map.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ServiceListsPageRoutingModule,
    ServiceMapPageModule,
  ],
  declarations: [
    ServiceListsPage,
  ],
})
export class ServiceListsPageModule {}
