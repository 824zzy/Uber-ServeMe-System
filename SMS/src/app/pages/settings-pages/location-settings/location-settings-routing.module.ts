import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationSettingsPage } from './location-settings.page';

const routes: Routes = [
  {
    path: '',
    component: LocationSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationSettingsPageRoutingModule {}
