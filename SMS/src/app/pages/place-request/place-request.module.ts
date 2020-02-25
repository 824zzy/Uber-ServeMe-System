import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaceRequestPageRoutingModule } from './place-request-routing.module';

import { PlaceRequestPage } from './place-request.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaceRequestPageRoutingModule
  ],
  declarations: [PlaceRequestPage]
})
export class PlaceRequestPageModule {}
