import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyPasswordPageRoutingModule } from './verify-password-routing.module';

import { VerifyPasswordPage } from './verify-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyPasswordPageRoutingModule
  ],
  declarations: [VerifyPasswordPage]
})
export class VerifyPasswordPageModule {}
