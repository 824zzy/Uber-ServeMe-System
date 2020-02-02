import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      { path: 'home', 
        loadChildren: () => import('../../home/home.module').then( m => m.HomePageModule)
      },
      { path: 'settings', 
        loadChildren: () => import('../settings/settings.module').then( m => m.SettingsPageModule)
      },
      {
        path: 'payment',
        loadChildren: () => import('../payment/payment.module').then( m => m.PaymentPageModule)
      },
      {
        path: 'history',
        loadChildren: () => import('../history/history.module').then( m => m.HistoryPageModule)
      },
      // TODO: add more pages to menu
    ]
  },
  // {
  //   path: '',
  //   redirectTo: '/home',
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
