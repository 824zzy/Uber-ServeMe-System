import { Component, OnInit } from '@angular/core';
import {
  ToastController,
  Platform,
} from '@ionic/angular';
import {
  GoogleMap,
  GoogleMaps,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation
} from '@ionic-native/google-maps';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  map: GoogleMap;
  address: string;
  
  constructor(
    public toastCtrl: ToastController,
    private platform: Platform
  ) { }

  async ngOnInit() {
    this.platform.ready();
    this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {

    });
    this.goToMyLocation();
  }

  goToMyLocation(){
    this.map.clear();

    // Get the location of you
    this.map.getMyLocation().then((location: MyLocation) => {
      console.log(JSON.stringify(location, null, 2));

      // Move the map camera to the location with animation
      this.map.animateCamera({
        target: location.latLng,
        zoom: 17,
        duration: 5000
      });

      // add a market
      let marker: Marker = this.map.addMarkerSync({
        title: '@ionic-native/google-maps plugin!',
        snippet: 'This plugin is awesome!',
        position: location.latLng,
        animation: GoogleMapsAnimation.BOUNCE
      });

      // show the infoWindow
      marker.showInfoWindow();

      // if clicked it, display the alert
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        this.showToast('clicked!');
      });  

      this.map.on(GoogleMapsEvent.MAP_READY).subscribe(
        (data) => {
          console.log("Click MAP", data);
        }
      );
    })
    .catch(err => {
      // this.loading.dismiss();
      this.showToast(err.err_message);
    });
  }

  async showToast(message: string) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }
}
