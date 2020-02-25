import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { ToastController, Platform, LoadingController, NavController } from '@ionic/angular';
import { GoogleMap, GoogleMaps, GoogleMapsEvent, Marker, GoogleMapsAnimation, MyLocation, Environment, GoogleMapOptions, Geocoder, ILatLng } from '@ionic-native/google-maps';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AngularFirestore } from '@angular/fire/firestore';

declare var google: any

@Component({
  selector: 'app-vendor-location',
  templateUrl: './vendor-location.page.html',
  styleUrls: ['./vendor-location.page.scss'],
})
export class VendorLocationPage implements OnInit {
  @ViewChild('mapElement', {static: true}) mapElement: any
  private loading: any
  private map: GoogleMap
  public search: string=''
  public service: string=''
  private googleAutocomplete = new google.maps.places.AutocompleteService()
  public searchResults = new Array<any>()
  private originMarker: Marker
  public destination: any
  public position: any

  

  constructor(
    public toastCtrl: ToastController,
    private platform: Platform,
    private loadingCtrl: LoadingController,
    private ngZone: NgZone,
    public route: Router,
    public activateRoute: ActivatedRoute,
    public nav: NavController,
    public user: UserService,
    public afstore: AngularFirestore,
    public toast: ToastController,
    public router: Router,
  ) {
  }

  async ngOnInit() {
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
        title: 'Your current location',
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

  async addDestinationMarker(item: any) {
    this.search = ''
    this.destination = item

    const info: any = await Geocoder.geocode({ address: this.destination.description })

    let markerDestination: Marker = this.map.addMarkerSync({
      title: this.destination.description,
      icon: '#000',
      animation: GoogleMapsAnimation.DROP,
      position: info[0].position,
    })

    await this.map.moveCamera({ target: info[0].position })
    this.position = info[0].position
  }

  async saveLocation() {
    try {
      this.user.updateLocation(this.position)
      this.presentAlert("Successfully update you Location!")
      this.router.navigate(['/vendor'])
    } catch(error) {
      console.log(error)
    }
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

  async presentAlert(content: string) {
		const toast = await this.toast.create({
			message: content,
      position: 'top',
      duration: 2000
		})
		await toast.present()
  }
}
