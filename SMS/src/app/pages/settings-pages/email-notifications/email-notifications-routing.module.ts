import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailNotificationsPage } from './email-notifications.page';

const routes: Routes = [
  {
    path: '',
    component: EmailNotificationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmailNotificationsPageRoutingModule {}
