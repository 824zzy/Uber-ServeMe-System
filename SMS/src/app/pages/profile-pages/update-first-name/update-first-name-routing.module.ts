import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateFirstNamePage } from './update-first-name.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateFirstNamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateFirstNamePageRoutingModule {}
