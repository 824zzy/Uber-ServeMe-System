import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsPage } from './settings.page';
import { NavController } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: SettingsPage
  }
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
