import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from 'src/app/services/home-service.service';
import { HomeService } from 'src/app/interfaces/home-service';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.page.html',
  styleUrls: ['./vendor.page.scss'],
})
export class VendorPage implements OnInit {
  private loading: any
  private homeServices = new Array<HomeService>();
  private homeServicesSubscription: Subscription;

  constructor(
    private userService: UserService,
    private loadingCtrl: LoadingController,
    private homeServiceService: HomeServiceService,
    private toastCtrl: ToastController,
  ) {
    this.homeServicesSubscription = this.homeServiceService.getServices().subscribe(data => {
      this.homeServices = data
    })
   }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.homeServicesSubscription.unsubscribe()
  }

  async deleteProduct(id: string) {
    try {
      await this.homeServiceService.deleteProduct(id)
    } catch (error) {
      this.presentToast('Error when trying to delete')
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Loading...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }
}
