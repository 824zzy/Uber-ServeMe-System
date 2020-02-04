import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitlanchPage } from './initlanch.page';

const routes: Routes = [
  {
    path: '',
    component: InitlanchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InitlanchPageRoutingModule {}
