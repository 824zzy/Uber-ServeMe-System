import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppliancesPageRoutingModule } from './appliances-routing.module';

import { AppliancesPage } from './appliances.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppliancesPageRoutingModule
  ],
  declarations: [AppliancesPage]
})
export class AppliancesPageModule {}
