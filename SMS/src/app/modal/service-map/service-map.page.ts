import { Component, OnInit, ElementRef, Renderer2, ViewChild, NgZone, DoBootstrap } from '@angular/core';
import { ToastController, Platform, LoadingController, NavController, ModalController } from '@ionic/angular';
import { GoogleMap, GoogleMaps, GoogleMapsEvent, Marker, GoogleMapsAnimation, MyLocation, Environment, GoogleMapOptions, Geocoder, ILatLng } from '@ionic-native/google-maps';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore'

declare var google: any

@Component({
  selector: 'app-service-map',
  templateUrl: './service-map.page.html',
  styleUrls: ['./service-map.page.scss'],
})
export class ServiceMapPage implements OnInit {

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

  public vendorList = new Array<any>()
  public loadVendor = new Array<any>()
  flag: boolean = false;
  hide: boolean = false;
  message: any;
  showSpinner: boolean = true;
  showInfo: boolean = false;

  constructor(
    public toastCtrl: ToastController,
    private platform: Platform,
    private loadingCtrl: LoadingController,
    // private ngZone: NgZone,
    public route: Router,
    public activatedRoute: ActivatedRoute,
    public nav: NavController,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    public modalCtrl: ModalController,
    public firestore: AngularFirestore,
    // private dataService: DataService,
  ) { 
    // console.log('declared var:', google)

    // this.activateRoute.queryParams.subscribe((data: any) => {
    //   console.log("data.service:", data.service)
    //   this.service = data.service
    //   console.log("service1:", this.service)
    // })
  }

  async ngOnInit() {
    this.service = this.activatedRoute.snapshot.params['service'];
    let searchIcon = this.elementRef.nativeElement.querySelector('.blank');
    // console.log('searchCSS:',searchIcon)
      if(searchIcon != null) {
        this.renderer.listen(searchIcon, 'click' , () => {
          this.route.navigate(['home/feed/service-lists']);
          // this.modalCtrl.dismiss({
          //   'dismissed': true
          // })
        });
      }
    // this.firestore.collection('HomeServices', ref => ref.where('category', "==", this.service)).valueChanges().subscribe( vendorList => {
      this.firestore.collection('HomeServices', ref => ref.where("category", "==", this.service)).get().toPromise()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log('No matching documents.');
          return;
        }  
        snapshot.forEach(doc => {
          console.log("didi", doc.id, '=>', doc.data());
          this.vendorList.push(doc.data())
          this.loadVendor.push(doc.data())
        })
      })
      .catch(err => {
        console.log("Error getting documents: ", err)
      })

    console.log("service:", this.service)
    this.platform.ready();
    this.mapElement = this.mapElement.nativeElement
    this.mapElement.style.width = this.platform.width()+'px'
    this.mapElement.style.height = '100%'
    this.loadMap()

  }

  initializeItems(): void {
    this.vendorList = this.loadVendor;
    this.flag = true;
  }


  async loadMap() {
    this.loading = await this.loadingCtrl.create()
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
      this.addOriginMarker()
    } catch(error) {
      console.log(error)
    } finally {
      this.loading.dismiss()
    }

    console.log('vendor: ', this.vendorList)

    for ( const i in this.vendorList ) {
      this.destination = this.vendorList[i]
      
      this.map.addMarker({
        icon: { 
          url: "../assets/icon/setting-marker.svg", 
          size: {
            width: 32,
            height: 32
          }
        },
        animation: GoogleMapsAnimation.BOUNCE,
        position: this.destination.location,
      }).then(
        marker => {
          marker.on(GoogleMapsEvent.MARKER_CLICK)
            .subscribe(() => {
              if (this.showInfo == true){
                this.showInfo = false;
                return
              }
              console.log('destination: ', this.destination)
              this.map.moveCamera({
                target: this.destination.location,
                zoom: 12,
              })
              this.showInfo = true;
          })
        }
      )

    }
    
    // loading already complete
    this.showSpinner=false;
  }


  async addOriginMarker() {
    try {
      const myLocation: MyLocation = await this.map.getMyLocation()
      await this.map.moveCamera({
        target: myLocation.latLng,
        zoom: 12,
      })
      this.originMarker = this.map.addMarkerSync({
        icon: "blue",
        animation: GoogleMapsAnimation.BOUNCE,
        position: myLocation.latLng,
      })
    } catch (error) {
      console.log(error)
    } finally {
      this.loading.dismiss()
    }
  }

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
      // this.flag = false;
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
    // this.modalCtrl.dismiss({
    //   'dismissed': true
    // })

  }

}
