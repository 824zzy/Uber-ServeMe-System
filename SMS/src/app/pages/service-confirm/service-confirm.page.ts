import { Component, OnInit, ElementRef, Renderer2, ViewChild, NgZone } from '@angular/core';
import { ToastController, Platform, LoadingController, NavController } from '@ionic/angular';
import { GoogleMap, GoogleMaps, GoogleMapsEvent, Marker, GoogleMapsAnimation, MyLocation, Environment, GoogleMapOptions, Geocoder, ILatLng } from '@ionic-native/google-maps';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore'

declare var google: any

@Component({
  selector: 'app-service-confirm',
  templateUrl: './service-confirm.page.html',
  styleUrls: ['./service-confirm.page.scss'],
})
export class ServiceConfirmPage implements OnInit {

  @ViewChild('mapElement', {static: true}) mapElement: any
  private loading: any
  private map: GoogleMap
  public search: string=''
  public service: any
  public searchResults = new Array<any>()
  private originMarker: Marker
  public destination: any
  private googleDirectionService = new google.maps.DirectionsService()

  vendorList: any[];
  loadVendor: any[];
  flag: boolean = false;
  hide: boolean = false;
  distance: any;
  data: any;  

  constructor(
    public toastCtrl: ToastController,
    private platform: Platform,
    private loadingCtrl: LoadingController,
    private ngZone: NgZone,
    public route: Router,
    public activateRoute: ActivatedRoute,
    public nav: NavController,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    public firestore: AngularFirestore,
  ) { 
    this.activateRoute.queryParams.subscribe(params => {
      console.log('params: ', params);
      if (params && params.vendor) {
        this.data = JSON.parse(params.vendor);
      }
      console.log('params: ', this.data.category);
    })

  }

  ngOnInit() {


    let searchIcon = this.elementRef.nativeElement.querySelector('.blank');
    // console.log('searchCSS:',searchIcon)
      if(searchIcon != null) {
        this.renderer.listen(searchIcon, 'click' , () => {
          // console.log('gooo')
          this.route.navigate(['home/feed/service-lists'])
        });
      }
    
    this.platform.ready();
    this.mapElement = this.mapElement.nativeElement
    this.mapElement.style.width = this.platform.width()+'px'
    this.mapElement.style.height = '100%'

    // put calcRoute in ngOnInit
    this.calcRoute(this.data)
    
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
        zoom: false,
      }
    }
    this.map = GoogleMaps.create(this.mapElement, mapOptions)
    try {
      await this.map.one(GoogleMapsEvent.MAP_READY)
      // this.addOriginMarker()
    } catch(error) {
      console.log(error)
    } finally {
      this.loading.dismiss()
    }
  }


  // async addOriginMarker() {
  //   try {
  //     const myLocation: MyLocation = await this.map.getMyLocation()
  //     await this.map.moveCamera({
  //       target: myLocation.latLng,
  //       zoom: 18
  //     })
  //     this.originMarker = this.map.addMarkerSync({
  //       title: 'origin',
  //       icon: "#000",
  //       animation: GoogleMapsAnimation.DROP,
  //       position: myLocation.latLng,
  //     })
  //     console.log('this.origin', this.originMarker)
  //   } catch (error) {
  //     console.log(error)
  //   } finally {
  //     this.loading.dismiss()
  //   }
  // }


  async calcRoute(vendor) {
    // should have load Map in function
    await this.loadMap()

    // put Marker in function-calcRoute
    ////////////////////////////////////////////
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
      console.log('this.origin', this.originMarker)
    } catch (error) {
      console.log(error)
    } finally {
      this.loading.dismiss()
    }
    ////////////////////////////////////////////
    
    this.destination = vendor
    // console.log('des:', this.destination);
    // console.log('name:', this.destination.name);
    // console.log('pos:', this.destination.location);

    // const info: any = await Geocoder.geocode({ address: this.destination.description })

    //TODO  not use info to get info[0].position, just get position from database
    

    let markerDestination: Marker = this.map.addMarkerSync({
      title: this.destination.name,
      icon: '#000',
      animation: GoogleMapsAnimation.DROP,
      position: this.destination.location,
    })
    // console.log('marker name:', this.destination);
    // console.table([this.destination])
    // console.table([this.originMarker])

    // TODO calculate dis
    const lat1 = this.originMarker.getPosition().lat
    const lnt1 = this.originMarker.getPosition().lng
    const lat2 = markerDestination.getPosition().lat
    const lnt2 = markerDestination.getPosition().lng
    this.distance = (this.getDistanceFromLatLonInKm(lat1, lnt1, lat2, lnt2)).toFixed(1)


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
        width: 7,
     })
     await this.map.moveCamera({ 
        target: points
      })
     this.map.panBy(0, 0)
    })
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
  
}
