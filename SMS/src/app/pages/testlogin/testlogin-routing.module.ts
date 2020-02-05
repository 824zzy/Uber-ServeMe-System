import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestloginPage } from './testlogin.page';

const routes: Routes = [
  {
    path: '',
    component: TestloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestloginPageRoutingModule {}
