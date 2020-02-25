import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendorLocationPage } from './vendor-location.page';

const routes: Routes = [
  {
    path: '',
    component: VendorLocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorLocationPageRoutingModule {}
