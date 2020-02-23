import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendorRequestPage } from './vendor-request.page';

const routes: Routes = [
  {
    path: '',
    component: VendorRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorRequestPageRoutingModule {}
