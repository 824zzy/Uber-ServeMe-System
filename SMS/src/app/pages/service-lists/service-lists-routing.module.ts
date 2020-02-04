import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceListsPage } from './service-lists.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceListsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceListsPageRoutingModule {}
