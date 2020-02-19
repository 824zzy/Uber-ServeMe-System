import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateEmailPageRoutingModule } from './update-email-routing.module';

import { UpdateEmailPage } from './update-email.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateEmailPageRoutingModule
  ],
  declarations: [UpdateEmailPage]
})
export class UpdateEmailPageModule {}
