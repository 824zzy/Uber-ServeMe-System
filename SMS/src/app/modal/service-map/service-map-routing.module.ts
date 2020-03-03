import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceMapPage } from './service-map.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceMapPageRoutingModule {}
