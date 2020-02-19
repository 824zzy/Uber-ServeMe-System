import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyPasswordPage } from './verify-password.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyPasswordPageRoutingModule {}
