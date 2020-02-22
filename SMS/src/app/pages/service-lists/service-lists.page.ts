import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { ToastController, Platform, LoadingController, NavController } from '@ionic/angular';
import { GoogleMap, GoogleMaps, GoogleMapsEvent, Marker, GoogleMapsAnimation, MyLocation, Environment, GoogleMapOptions, Geocoder, ILatLng } from '@ionic-native/google-maps';
import { Router, ActivatedRoute } from '@angular/router';

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
  public service: string=''
  private googleAutocomplete = new google.maps.places.AutocompleteService()
  public searchResults = new Array<any>()
  private originMarker: Marker
  public destination: any
  private googleDirectionService = new google.maps.DirectionsService()

  constructor(
    public toastCtrl: ToastController,
    private platform: Platform,
    private loadingCtrl: LoadingController,
    private ngZone: NgZone,
    public route: Router,
    public activateRoute: ActivatedRoute,
    public nav: NavController,
  ) { 
    console.log('declared var:', google)
  }

  async ngOnInit() {
    this.activateRoute.queryParams.subscribe((data: any) => {
      console.log("data.service:", data.service)
      this.service = data.service
    })
    console.log("service:", this.service)
    this.platform.ready();
    this.mapElement = this.mapElement.nativeElement
    this.mapElement.style.width = this.platform.width()+'px'
    this.mapElement.style.height = this.platform.height()+'px'
    this.loadMap()
  }

  async loadMap() {
    this.loading = await this.loadingCtrl.create({ message: 'Loading map...' })
    // TODO: add loading
    // await this.loading.present()
    Environment.setEnv({      
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBfdfHVfFgZbqw40ZBzZZa7kMTrEOvxarg',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBfdfHVfFgZbqw40ZBzZZa7kMTrEOvxarg'
    })
    const mapOptions: GoogleMapOptions = {
      controls: {
        zoom: false
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

  searchChanged() {
    if(!this.search.trim().length) return;
    this.googleAutocomplete.getPlacePredictions({ input: this.search }, predictions => {
      this.ngZone.run(() => {
        this.searchResults = predictions
      })
    })
  }

  async calcRoute(item: any) {
    this.search = ''
    this.destination = item

    const info: any = await Geocoder.geocode({ address: this.destination.description })

    let markerDestination: Marker = this.map.addMarkerSync({
      title: this.destination.description,
      icon: '#000',
      animation: GoogleMapsAnimation.DROP,
      position: info[0].position,
    })
    
    this.googleDirectionService.route({
      origin: this.originMarker.getPosition(),
      destination: markerDestination.getPosition(),
      travelMode: 'DRIVING',
    }, async results => {
      // console.log('results:', results)
      const points = new Array<ILatLng>()
      const routes = results.routes[0].overview_path
      // console.log("dada", points, results)
      for(let i=0; i<routes.length;i++) {
        points[i] = {
          lat: routes[i].lat(),
          lng: routes[i].lng(),
        }
      }
      await this.map.addPolyline({
        points: points,
        color: '#000',
        width: 5,
     })
     await this.map.moveCamera({ target: points })
     this.map.panBy(0, 100)
    })
  }

  async back() {
    try {
      await this.map.clear()
      this.destination = null
      this.addOriginMarker()
    } catch(error) {
      console.log(error)
    }
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
