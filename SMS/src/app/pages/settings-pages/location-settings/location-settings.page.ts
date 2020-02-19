import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-location-settings',
  templateUrl: './location-settings.page.html',
  styleUrls: ['./location-settings.page.scss'],
})
export class LocationSettingsPage implements OnInit {

  constructor(
    public alertController: AlertController,
  ) { }

  ngOnInit() {
  }


}