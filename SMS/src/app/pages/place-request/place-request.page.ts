import { Component, OnInit, ElementRef, Renderer2, ViewChild, NgZone } from '@angular/core';
// import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { HomeService } from 'src/app/interfaces/home-service';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';
import { HomeServiceService } from 'src/app/services/home-service.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-place-request',
  templateUrl: './place-request.page.html',
  styleUrls: ['./place-request.page.scss'],
})
export class PlaceRequestPage implements OnInit {
  private homeSeviceId: string = null
  public homeService: HomeService = {}
  private loading: any;
  private homeServiceSubscription: Subscription;
  public request_details: any
  public data: any
  public back: string

  constructor(
    private homeServiceService: HomeServiceService,
    private activatedRoute: ActivatedRoute, 
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private userService: UserService,
    private toastCtrl: ToastController,
    private router: Router,
    public activateRoute: ActivatedRoute,
    public afstore: AngularFirestore,
    public afAuth: AngularFireAuth,
  ) {
    this.homeSeviceId = this.activatedRoute.snapshot.params['id'];
    console.log('placerequest id', this.homeSeviceId)
    if (this.homeSeviceId) this.loadProduct();

    this.activateRoute.queryParams.subscribe(params => {
      console.log('params: ', params);
      if (params && params.vendor) {
        this.data = JSON.parse(params.vendor);
      }
      if (params && params.back) {
        this.back = params.back;
      }
      console.log('params: ', this.back);
    })
  }

  ngOnInit() { }

  ngOnDestroy() {
    if (this.homeServiceSubscription) this.homeServiceSubscription.unsubscribe();
  }

  loadProduct() {
    this.homeServiceSubscription = this.homeServiceService.getService(this.homeSeviceId).subscribe(data => {
      this.homeService = data;
    });
  }

  async placeOrder() {
    await this.presentLoading()
    let navigationExtras: NavigationExtras = {
      state: {
        homeServiceId: this.homeSeviceId,
        homeService: this.homeService
      }
    };
    // add request to vendor current request
    let vendorId =  this.homeService.vendorId
    this.data['userId'] = this.afAuth.auth.currentUser.uid
    console.log(this.data)
    // this.userService.addCurrentOrder(vendorId, this.afAuth.auth.currentUser.uid, this.data)

    this.router.navigate(['/home/me/payment'], navigationExtras)
    this.loading.dismiss()
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
