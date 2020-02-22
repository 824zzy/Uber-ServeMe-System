import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { ToastController, Platform, LoadingController } from '@ionic/angular';
import { GoogleMap, GoogleMaps, GoogleMapsEvent, Marker, GoogleMapsAnimation, MyLocation, Environment, GoogleMapOptions, Geocoder, ILatLng } from '@ionic-native/google-maps';
import { Router } from '@angular/router';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  public service: string=''
  
  constructor(
    public toastCtrl: ToastController,
    private platform: Platform,
    private loadingCtrl: LoadingController,
    private ngZone: NgZone,
    public router: Router,
  ) { 
  }

  async ngOnInit() {
  }

  navigateToService() {
    this.router.navigate['/']
  }
}
