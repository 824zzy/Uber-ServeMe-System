import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivacySettingsPage } from './privacy-settings.page';

const routes: Routes = [
  {
    path: '',
    component: PrivacySettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivacySettingsPageRoutingModule {}
