import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllservicesPage } from './allservices.page';

const routes: Routes = [
  {
    path: '',
    component: AllservicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllservicesPageRoutingModule {}
