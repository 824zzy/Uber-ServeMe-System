import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateLastNamePage } from './update-last-name.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateLastNamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateLastNamePageRoutingModule {}
