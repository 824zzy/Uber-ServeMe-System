import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MePage } from './me.page';

const routes: Routes = [
  {
    path: '',
    component: MePage
  },
  {
    path: 'payment',
    loadChildren: () => import('../payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('../history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'collections',
    loadChildren: () => import('../collections/collections.module').then( m => m.CollectionsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
  },
  { 
    path: 'settings', 
    loadChildren: () => import('../settings/settings.module').then( m => m.SettingsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MePageRoutingModule {}
