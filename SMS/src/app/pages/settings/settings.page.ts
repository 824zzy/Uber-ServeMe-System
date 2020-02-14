import { Component, OnInit } from '@angular/core';
import { AlertController} from '@ionic/angular'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(
    public alertController: AlertController,
  ) { }

  ngOnInit() {
  }
  
  async clearHistory() {
    // TODO:
    const alert = await this.alertController.create({
      message: 'Clear all your keyword, location and recent history?',
      buttons: ['OK']
    })

   await alert.present()
  }

}
