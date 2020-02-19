import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  },
  {
    path: 'update-first-name',
    loadChildren: () => import('../profile-pages/update-first-name/update-first-name.module').then( m => m.UpdateFirstNamePageModule)
  },
  {
    path: 'update-last-name',
    loadChildren: () => import('../profile-pages/update-last-name/update-last-name.module').then( m => m.UpdateLastNamePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
