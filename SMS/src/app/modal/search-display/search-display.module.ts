import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchDisplayPageRoutingModule } from './search-display-routing.module';

import { SearchDisplayPage } from './search-display.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchDisplayPageRoutingModule
  ],
  declarations: [SearchDisplayPage]
})
export class SearchDisplayPageModule {}
