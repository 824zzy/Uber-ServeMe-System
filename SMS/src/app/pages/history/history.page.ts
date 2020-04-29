import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  private loading: any
  private orders = new Array<any>()
  private orderSubscription: Subscription;
  private visiable = true;

  constructor(
    private userService: UserService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private router: Router,
  ) {
    this.orderSubscription = this.userService.getOrders().subscribe(data => {
      this.orders = data
    })
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.orderSubscription.unsubscribe()
  }

  async deleteProduct(id: string) {
    try {
      
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
  
  async navToReview(order: any) {
    console.log(order)
    await this.presentLoading()
    let navigationExtras: NavigationExtras = {
      state: {
        orderDetail: order
      }
    }
    this.router.navigate(['/review'], navigationExtras)
    this.loading.dismiss()
  }

  async deleteOrder(order:any) {
    this.visiable = false
  }

}
