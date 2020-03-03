import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchDisplayPage } from './search-display.page';

const routes: Routes = [
  {
    path: '',
    component: SearchDisplayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchDisplayPageRoutingModule {}
