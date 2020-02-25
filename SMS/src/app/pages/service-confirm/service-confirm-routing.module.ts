import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceConfirmPage } from './service-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceConfirmPageRoutingModule {}
