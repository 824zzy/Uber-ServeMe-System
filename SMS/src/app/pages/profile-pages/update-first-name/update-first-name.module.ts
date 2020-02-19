import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateFirstNamePageRoutingModule } from './update-first-name-routing.module';

import { UpdateFirstNamePage } from './update-first-name.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateFirstNamePageRoutingModule
  ],
  declarations: [UpdateFirstNamePage]
})
export class UpdateFirstNamePageModule {}
