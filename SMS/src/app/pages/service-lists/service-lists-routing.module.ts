import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceListsPage } from './service-lists.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceListsPage
  },
  {
    path: 'service-confirm',
    loadChildren: () => import('../service-confirm/service-confirm.module').then( m => m.ServiceConfirmPageModule)
  },
  {
    path: 'service-confirm/:id',
    loadChildren: () => import('../service-confirm/service-confirm.module').then( m => m.ServiceConfirmPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceListsPageRoutingModule {}
