import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsPage } from './settings.page';
import { NavController } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: SettingsPage,
  },
  {
    path: 'push-notifications',
    loadChildren: () => import('../settings-pages/push-notifications/push-notifications.module').then( m => m.PushNotificationsPageModule)
  },
  {
    path: 'email-notifications',
    loadChildren: () => import('../settings-pages/email-notifications/email-notifications.module').then( m => m.EmailNotificationsPageModule)
  },
  {
    path: 'privacy-settings',
    loadChildren: () => import('../settings-pages/privacy-settings/privacy-settings.module').then( m => m.PrivacySettingsPageModule)
  },
  {
    path: 'location-settings',
    loadChildren: () => import('../settings-pages/location-settings/location-settings.module').then( m => m.LocationSettingsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsPageRoutingModule {

  constructor(public nav: NavController) {
  }

  goRoot(){
    this.nav.navigateRoot(['/home']);
  }
}
