import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InitlanchPageRoutingModule } from './initlanch-routing.module';

import { InitlanchPage } from './initlanch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InitlanchPageRoutingModule
  ],
  declarations: [InitlanchPage]
})
export class InitlanchPageModule {}
