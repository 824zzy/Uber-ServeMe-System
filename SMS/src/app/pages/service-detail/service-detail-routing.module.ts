import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceDetailPage } from './service-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceDetailPageRoutingModule {}
