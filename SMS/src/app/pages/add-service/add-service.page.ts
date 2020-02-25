import { Component, OnInit } from '@angular/core';
// import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/interfaces/home-service';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';
import { HomeServiceService } from 'src/app/services/home-service.service';
import { error } from 'protractor';
import { GoogleMap, GoogleMaps, GoogleMapsEvent, Marker, GoogleMapsAnimation, MyLocation, Environment, GoogleMapOptions, Geocoder, ILatLng } from '@ionic-native/google-maps';

// declare var google: any

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.page.html',
  styleUrls: ['./add-service.page.scss'],
})
export class AddServicePage implements OnInit {
  private homeSeviceId: string = null;
  public homeService: HomeService = {};
  private loading: any;
  private homeServiceSubscription: Subscription;

  // private coordinates: any
  // private latitude: any
  // private longitude: any

  constructor(
    private homeServiceService: HomeServiceService,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private userService: UserService,
    private toastCtrl: ToastController,
    // private geolocation: Geolocation,
  ) {
    this.homeSeviceId = this.activatedRoute.snapshot.params['id'];
    if (this.homeSeviceId) this.loadProduct();
    
    // this.geolocation.getCurrentPosition(resp => {
    //   this.latitude = resp.coords.latitude
    //   this.longitude = resp.coords.longitude
    //   const infoWindow = new google.maps.InfoWindow;
    // }), err=> { console.log(err)}
  }

  ngOnInit() {
   }

  ngOnDestroy() {
    if (this.homeServiceSubscription) this.homeServiceSubscription.unsubscribe();
  }

  loadProduct() {
    this.homeServiceSubscription = this.homeServiceService.getService(this.homeSeviceId).subscribe(data => {
      this.homeService = data;
    });
  }

  async saveProduct() {
    await this.presentLoading();

    this.homeService.vendorId = this.userService.getAuth().currentUser.uid;
    console.log(this.homeService.vendorId)
    if (this.homeSeviceId) {
      try {
        await this.homeServiceService.updateService(this.homeSeviceId, this.homeService);
        await this.loading.dismiss();
        console.log('update services')
        // TODO:
        // this.navCtrl.navigateBack('/home');
      } catch (error) {
        this.presentToast('Error when trying to save');
        this.loading.dismiss();
      }
    } else {
      this.homeService.createdAt = new Date().getTime();
      try {
        await this.homeServiceService.addService(this.homeService);
        await this.loading.dismiss();
        console.log("save success:", this.homeService)
        // TODO:
        // this.navCtrl.navigateBack('/home');
      } catch (error) {
        this.presentToast('Error when trying to save');
        this.loading.dismiss();
      }
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Please wait...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }
}
