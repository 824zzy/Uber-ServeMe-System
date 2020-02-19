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
  },
  {
    path: 'update-email',
    loadChildren: () => import('../profile-pages/update-email/update-email.module').then( m => m.UpdateEmailPageModule)
  },
  {
    path: 'verify-password',
    loadChildren: () => import('../profile-pages/verify-password/verify-password.module').then( m => m.VerifyPasswordPageModule)
  },
  {
    path: 'update-password',
    loadChildren: () => import('../profile-pages/update-password/update-password.module').then( m => m.UpdatePasswordPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
