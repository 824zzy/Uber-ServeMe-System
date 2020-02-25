import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceListsPageRoutingModule } from './service-lists-routing.module';

import { ServiceListsPage } from './service-lists.page';

import { SpinnerComponent } from '../../components/spinner/spinner.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceListsPageRoutingModule,
  ],
  declarations: [
    ServiceListsPage,
    SpinnerComponent
  ],
})
export class ServiceListsPageModule {}
