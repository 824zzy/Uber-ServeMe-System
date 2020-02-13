import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmailNotificationsPageRoutingModule } from './email-notifications-routing.module';

import { EmailNotificationsPage } from './email-notifications.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmailNotificationsPageRoutingModule
  ],
  declarations: [EmailNotificationsPage]
})
export class EmailNotificationsPageModule {}
