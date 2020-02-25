import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectricalPage } from './electrical.page';

const routes: Routes = [
  {
    path: '',
    component: ElectricalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectricalPageRoutingModule {}
