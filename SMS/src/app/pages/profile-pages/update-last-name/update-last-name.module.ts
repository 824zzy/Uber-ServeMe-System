import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateLastNamePageRoutingModule } from './update-last-name-routing.module';

import { UpdateLastNamePage } from './update-last-name.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateLastNamePageRoutingModule
  ],
  declarations: [UpdateLastNamePage]
})
export class UpdateLastNamePageModule {}
