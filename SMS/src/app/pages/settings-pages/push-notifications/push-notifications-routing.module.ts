import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PushNotificationsPage } from './push-notifications.page';

const routes: Routes = [
  {
    path: '',
    component: PushNotificationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PushNotificationsPageRoutingModule {}
