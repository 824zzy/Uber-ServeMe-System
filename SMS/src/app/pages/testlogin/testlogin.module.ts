import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestloginPageRoutingModule } from './testlogin-routing.module';

import { TestloginPage } from './testlogin.page';

import * as firebase from 'firebase';

import { environment } from 'src/environments/environment'

firebase.initializeApp(environment.firebase);


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestloginPageRoutingModule
  ],
  declarations: [TestloginPage]
})
export class TestloginPageModule {}
