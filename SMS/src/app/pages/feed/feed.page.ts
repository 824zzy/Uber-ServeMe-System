import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { ToastController, Platform, LoadingController } from '@ionic/angular';
import { GoogleMap, GoogleMaps, GoogleMapsEvent, Marker, GoogleMapsAnimation, MyLocation, Environment, GoogleMapOptions, Geocoder, ILatLng } from '@ionic-native/google-maps';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from 'src/app/services/user.service';
import { HomeServiceService } from 'src/app/services/home-service.service';
import { Subscription } from 'rxjs';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var google: any

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  @ViewChild('mapElement', {static: true}) mapElement: any
  private homeServicesSubscription: Subscription;
  public goalService: any
  public loadedGoalService: any
  public flag: any
  private map: GoogleMaps

  latitude: any
  longitude: any
  current: any
  
  constructor(
    public toastCtrl: ToastController,
    private platform: Platform,
    private loadingCtrl: LoadingController,
    private ngZone: NgZone,
    public router: Router,
    private firestore: AngularFirestore,
    private userService: UserService,
    private homeServiceService: HomeServiceService,
    private geolocation: Geolocation,
  ) { 
  }

  async ngOnInit() {
    // this.firestore.collection('HomeServices').valueChanges().subscribe(goalService => {
    //   this.goalService = goalService
    //   this.loadedGoalService = goalService
    // })
    // this.data = this.firestore.collection('HomeServices', ref => ref.where("userId", "==", this.userService.getAuth().currentUser.uid.toString()))
    // this.todel = this.firestore.collection('HomeServices')
    // console.log(this.data.get(), this.todel)
    
    this.homeServicesSubscription = this.homeServiceService.getServices().subscribe(data => {
      this.goalService = data
      this.loadedGoalService = data
    })
    console.log(this.loadedGoalService)
    this.flag = false

    this.geolocation.getCurrentPosition().then(resp => {
      this.latitude = resp.coords.latitude
      this.longitude = resp.coords.longitude
      console.log(this.latitude, this.longitude)
    })

    this.current = new google.maps.LatLng(this.latitude, this.longitude)
    var test = new google.maps.LatLng(0, 0)
    console.log("current:", this.current)
    var service = new google.maps.DistanceMatrixService()
    var ans = service.getDistanceMatrix({
      origins: [this.current],
      destinations: [test],
      travelMode: 'DRIVING',
      avoidHighways: true,
      avoidTolls: true,
  }, function(response, status) {
    if(status != "OK") {
      alert("Error was: " + status)
    } else {
      var originList = response.originAddresses;
      var destinationList = response.destinationAddresses;

      for (var i = 0; i < originList.length; i++) {
        var results = response.rows[i].elements;
        // geocoder.geocode({'address': originList[i]},
        //     showGeocodedAddressOnMap(false));
        for (var j = 0; j < results.length; j++) {
          // geocoder.geocode({'address': destinationList[j]},
          //     showGeocodedAddressOnMap(true));
          console.log("dada", results[j],results[j].distance, results[j].duration)
          // outputDiv.innerHTML += originList[i] + ' to ' + destinationList[j] +
          //     ': ' + results[j].distance.text + ' in ' +
          //     results[j].duration.text + '<br>';
        }
      }
    }
  })
    console.log("ans", ans)




    // var query = serviceRef.where("userId", "==", this.userService.getAuth().currentUser.uid.toString())
    // console.log(serviceRef)
    // console.log(this.goalService)
    // console.log(this.loadedGoalService)
  }

  ngOnDestroy() {
    this.homeServicesSubscription.unsubscribe()
  }

  initializeServices() {
    this.goalService = this.loadedGoalService
    this.flag = true
  }

  filterService(evt) {
    this.initializeServices()
    const searchService = evt.srcElement.value
    console.log(searchService, this.goalService, this.flag)
    if(!searchService) {
      this.flag = false
      return
    }
    this.goalService = this.goalService.filter(currentGoal => {
      if(currentGoal.name && searchService) {
        if (currentGoal.name.toLowerCase().indexOf(searchService.toLowerCase())>-1) {
          return true
        }
        return false
      }
    })
  }

  navigateToService() {
    this.router.navigate['/']
  }

  // async back() {
  //   try {
  //     this.goalService = null
  //     this.loadedGoalService = null
  //   } catch(error) {
  //     console.log(error)
  //   }
  // }
}
