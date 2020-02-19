import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateEmailPage } from './update-email.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateEmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateEmailPageRoutingModule {}
