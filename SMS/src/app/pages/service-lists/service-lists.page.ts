import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastController, ModalController, NavController, IonContent } from '@ionic/angular';
import { Router, ActivatedRoute, Params, RoutesRecognized, NavigationExtras } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore'

import { ServiceFilterPage } from '../../modal/service-filter/service-filter.page';
import { MyLocation, GoogleMap } from '@ionic-native/google-maps';

import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-service-lists',
  templateUrl: './service-lists.page.html',
  styleUrls: ['./service-lists.page.scss'],
})
export class ServiceListsPage implements OnInit {

  @ViewChild('mapElement', {static: true}) mapElement: any
  public search: string=''
  public service: string=''
  public searchResults = new Array<any>()
  public destination: any
  private myLocation: MyLocation
  
  public vendors: any;
  public vendorList = new Array<any>()
  public sortVendorList = new Array<any>()
  public loadVendor = new Array<any>()
  flag: boolean = false;
  message: any;
  showSkele: boolean = false;

  filter: string

  constructor(
    public toastCtrl: ToastController,
    public route: Router,
    public activatedRoute: ActivatedRoute,
    public nav: NavController,
    public firestore: AngularFirestore,
    public modalCtrl: ModalController,
    public geolocation: Geolocation,
  ) { 

  }

  async ngOnInit() {
    this.filter = "default"

    // pass category through router
    this.service = this.activatedRoute.snapshot.params['service'];
    // console.log("dada", this.service)
    await this.firestore.collection('HomeServices', ref => ref.where("category", "==", this.service)).get().toPromise()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log('No matching documents.');
          return;
        }  
        snapshot.forEach(doc => {
          // console.log("didi", doc.id, '=>', doc.data());
          thiList.push(doc.data())
          this.loadVendor.push(doc.data())
        })
      })
      .catch(err => {
        console.log("Error getting documents: ", err)
      })
    
    this.vendors = await this.calculateDistance();

    // this.sortVendorList = this.vendorList.map((data) => {
    //   return data
    // } )

    this.vendorList.forEach(val => 
      this.sortVendorList.push(Object.assign({}, val))
    );

    console.log('sad:  ', this.vendors)
    console.log('ssadasdas:  ', this.vendorList)
    setTimeout(() => {
      this.showSkele = true;
    }, 1000);
  }


  // calculate distance

  async calculateDistance() {
    var lat1 = 0.0;
    var lnt1 = 0.0;
    await this.geolocation.getCurrentPosition().then((resp) => {
      lat1 = resp.coords.latitude;
      // console.log('lng: ', resp.coords.latitude)
      lnt1 = resp.coords.longitude;
     }).catch((error) => {
       console.log('Error getting location', error);
    });

    // this.vendorList.map((vendor) => {
    for (const i in this.vendorList){
      // console.log('distanceDISTANCasdasdfsafE  ', this.vendorList[i])
      // console.log('lat: ', lat1)
      // console.log('lng: ', lnt1)
      // debugger
      const lat2 = this.vendorList[i].location.lat
      const lnt2 = this.vendorList[i].location.lng
      this.vendorList[i].distance = (this.getDistanceFromLatLonInKm(lat1, lnt1, lat2, lnt2)).toFixed(1)
      // console.log('distanceDISTsdANCE  ', this.vendorList[i].distance)
    };

    return this.vendorList;

  }

  getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = this.deg2rad(lat2-lat1);  // deg2rad below
    const dLon = this.deg2rad(lon2-lon1); 
    const a =
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        const d = R * c; // Distance in km
        return d;
  }

  deg2rad(deg) {
    return deg * (Math.PI/180) / 1.6
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ServiceFilterPage,
      componentProps: {
        "value": this.filter,
      }
      // mode: "ios"
    });

    modal.onDidDismiss().then((data) => {
      if (data !== null) {
        this.filter = data.data;
        if (this.filter === "distance") {

          this.sortVendorList.sort((v1, v2) => {
            return v1.distance - v2.distance;
          });
          this.vendors = this.sortVendorList
        } else if (this.filter === "default") {
          this.vendors = this.vendorList;
        }
      } 
      console.log(this.filter);
    });
    
    return await modal.present();
  }  

  async goMap() {
    this.route.navigate(['home/feed/service-map', this.service])
  }  

  navBack() {
    this.nav.back();
  }

  async toConfirm(v) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        vendor: JSON.stringify(v),
        back: "home"
      }
    }
    this.route.navigate(['home/feed/service-lists/service-confirm'], navigationExtras)
  }
}
