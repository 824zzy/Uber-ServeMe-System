import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllservicesPageRoutingModule } from './allservices-routing.module';

import { AllservicesPage } from './allservices.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllservicesPageRoutingModule
  ],
  declarations: [AllservicesPage]
})
export class AllservicesPageModule {}
