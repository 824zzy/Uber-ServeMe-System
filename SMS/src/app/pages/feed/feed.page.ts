import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
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
    this.flag = false
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
