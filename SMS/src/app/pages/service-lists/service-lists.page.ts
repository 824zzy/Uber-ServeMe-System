import { Component, OnInit, ElementRef, Renderer2, ViewChild, NgZone, DoBootstrap } from '@angular/core';
import { ToastController, Platform, LoadingController, NavController } from '@ionic/angular';
import { GoogleMap, GoogleMaps, GoogleMapsEvent, Marker, GoogleMapsAnimation, MyLocation, Environment, GoogleMapOptions, Geocoder, ILatLng } from '@ionic-native/google-maps';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore'

import { DataService } from '../../services/data.service'

declare var google: any

@Component({
  selector: 'app-service-lists',
  templateUrl: './service-lists.page.html',
  styleUrls: ['./service-lists.page.scss'],
})
export class ServiceListsPage implements OnInit {
  @ViewChild('mapElement', {static: true}) mapElement: any
  private loading: any
  private map: GoogleMap
  public search: string=''
  public service: any
  public searchResults = new Array<any>()
  private originMarker: Marker
  public destination: any
  private googleDirectionService = new google.maps.DirectionsService()
  
  // public latitude: any
  // public longtitude: any

  vendorList: any[];
  loadVendor: any[];
  flag: boolean = false;
  hide: boolean = false;
  message: any;
  showSpinner: boolean = true;

  constructor(
    public toastCtrl: ToastController,
    private platform: Platform,
    private loadingCtrl: LoadingController,
    // private ngZone: NgZone,
    public route: Router,
    public activateRoute: ActivatedRoute,
    public nav: NavController,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    public firestore: AngularFirestore,
    // private dataService: DataService,
    // private geolocation: Geolocation,
  ) { 
    // console.log('declared var:', google)

    // this.activateRoute.queryParams.subscribe((data: any) => {
    //   console.log("data.service:", data.service)
    //   this.service = data.service
    //   console.log("service1:", this.service)
    // })
  }

  async ngOnInit() {

    let searchIcon = this.elementRef.nativeElement.querySelector('.blank');
    // console.log('searchCSS:',searchIcon)
      if(searchIcon != null) {
        this.renderer.listen(searchIcon, 'click' , () => {
          // console.log('gooo')
          this.route.navigate(['home/feed'])
        });
      }
    // this.firestore.collection('HomeServices', ref => ref.where('category', "==", this.service)).valueChanges().subscribe( vendorList => {
    this.firestore.collection('HomeServices').valueChanges().subscribe( vendorList => {
      this.vendorList = vendorList;
      this.loadVendor = vendorList;
    })

    console.log("service:", this.service)
    this.platform.ready();
    this.mapElement = this.mapElement.nativeElement
    this.mapElement.style.width = this.platform.width()+'px'
    this.mapElement.style.height = '100%'
    this.loadMap()

  }

  n


  initializeItems(): void {
    this.vendorList = this.loadVendor;
    this.flag = true;
  }


  async loadMap() {
    this.loading = await this.loadingCtrl.create()
    // TODO: add loading
    // await this.loading.present()
    Environment.setEnv({      
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBfdfHVfFgZbqw40ZBzZZa7kMTrEOvxarg',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBfdfHVfFgZbqw40ZBzZZa7kMTrEOvxarg'
    })
    const mapOptions: GoogleMapOptions = {
      controls: {
        zoom: true,
      }
    }
    this.map = GoogleMaps.create(this.mapElement, mapOptions)
    try {
      await this.map.one(GoogleMapsEvent.MAP_READY)
      this.addOriginMarker()
    } catch(error) {
      console.log(error)
    } finally {
      this.loading.dismiss()
    }

    console.log('vendor: ', this.vendorList)
    for ( const i in this.vendorList ) {
      this.destination = this.vendorList[i]
      console.log('vendor: ', this.destination)
      console.log('vendor-position: ', this.destination.location)
      this.map.addMarkerSync({
        title: 'origin',
        icon: '#000',
        animation: GoogleMapsAnimation.DROP,
        position: this.destination.location,
      })
    }
    

    this.showSpinner=false;
  }

  async addOriginMarker() {
    try {
      const myLocation: MyLocation = await this.map.getMyLocation()
      await this.map.moveCamera({
        target: myLocation.latLng,
        zoom: 18
      })
      this.originMarker = this.map.addMarkerSync({
        title: 'origin',
        icon: "#000",
        animation: GoogleMapsAnimation.DROP,
        position: myLocation.latLng,
      })
    } catch (error) {
      console.log(error)
    } finally {
      this.loading.dismiss()
    }
  }


  // TODO autocomplete from firestore
  
  // searchChanged() {
  //   if(!this.search.trim().length) return;
  //   this.googleAutocomplete.getPlacePredictions({ input: this.search }, predictions => {
  //     this.ngZone.run(() => {
  //       this.searchResults = predictions
  //     })
  //   })
  // }

  searchChanged(event) {
    this.initializeItems();
    
    const searchVendor = event.srcElement.value;

    if (!searchVendor) {
      this.flag = false;
      return;
    }
    this.vendorList = this.vendorList.filter(currentVendor => {
      if (currentVendor.name && searchVendor) {
        if (currentVendor.name.toLowerCase().indexOf(searchVendor.toLowerCase()) > -1) {
          return true;
        } 
        // do not show empty list
        // this.flag = false;
        return false;
      } 
      this.flag = false;
    })
    console.log(this.vendorList);
  }

  navToConfirmPage(vendor) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        vendor: JSON.stringify(vendor)
      }
    }
    this.message = ""

    this.flag = false;
    this.route.navigate(['home/feed/service-lists/service-confirm'], navigationExtras)
    

  }
  

  // goToMyLocation(){
  //   this.map.clear();

  //   // Get the location of you
  //   this.map.getMyLocation().then((location: MyLocation) => {
  //     console.log(JSON.stringify(location, null, 2));

  //     // Move the map camera to the location with animation
  //     this.map.animateCamera({
  //       target: location.latLng,
  //       zoom: 17,
  //       duration: 5000
  //     });

  //     // add a market
  //     let marker: Marker = this.map.addMarkerSync({
  //       title: '@ionic-native/google-maps plugin!',
  //       snippet: 'This plugin is awesome!',
  //       position: location.latLng,
  //       animation: GoogleMapsAnimation.BOUNCE
  //     });

  //     // show the infoWindow
  //     marker.showInfoWindow();

  //     // if clicked it, display the alert
  //     marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
  //       this.showToast('clicked!');
  //     });  

  //     this.map.on(GoogleMapsEvent.MAP_READY).subscribe(
  //       (data) => {
  //         console.log("Click MAP", data);
  //       }
  //     );
  //   })
  //   .catch(err => {
  //     // this.loading.dismiss();
  //     this.showToast(err.err_message);
  //   });
  // }

  // async showToast(message: string) {
  //   let toast = await this.toastCtrl.create({
  //     message: message,
  //     duration: 2000,
  //     position: 'middle'
  //   });
  //   toast.present();
  // }
}
