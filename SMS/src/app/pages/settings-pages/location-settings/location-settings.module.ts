import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationSettingsPageRoutingModule } from './location-settings-routing.module';

import { LocationSettingsPage } from './location-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationSettingsPageRoutingModule
  ],
  declarations: [LocationSettingsPage]
})
export class LocationSettingsPageModule {}
