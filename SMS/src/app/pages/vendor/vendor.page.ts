import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from 'src/app/services/home-service.service';
import { HomeService } from 'src/app/interfaces/home-service';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { LoadingController, ToastController, PopoverController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { VendorhomePopoverComponent } from '../../components/vendorhome-popover/vendorhome-popover.component'

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.page.html',
  styleUrls: ['./vendor.page.scss'],
})
export class VendorPage implements OnInit {
  private loading: any
  private homeServices = new Array<HomeService>();
  private homeServicesSubscription: Subscription;
  private userData: any

  constructor(
    private afAuth: AngularFireAuth,
    private userService: UserService,
    private loadingCtrl: LoadingController,
    private homeServiceService: HomeServiceService,
    private toastCtrl: ToastController,
    public firestore: AngularFirestore,
    private popCtrl: PopoverController,
  ) {
 
   }

  async ngOnInit() {
    // this.afAuth.auth.currentUser.uid
    // this.homeServicesSubscription = this.homeServiceService.getServices().subscribe(data => {
    //   this.homeServices = data
    // })

    await this.firestore.collection('HomeServices', ref => ref.where("vendorId", "==", this.afAuth.auth.currentUser.uid)).get().toPromise()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log('No matching documents.');
          return;
        }  
        snapshot.forEach(doc => {
          // console.log("didi", doc.id, '=>', doc.data());
          this.homeServices.push(doc.data())
        })
        console.log(this.homeServices)
      })
      .catch(err => {
        console.log("Error getting documents: ", err)
      })

    await this.firestore.collection("users").doc(this.afAuth.auth.currentUser.uid).get().toPromise()
    .then(doc => {
      if (!doc.exists) {
        console.log("----------------not match")
      } else {
        this.userData = doc.data();
        console.log("-----------", this.userData);
      }
    })
    .catch(err => {
      console.log("Error getting documents: ", err)
    })
    
  }

  // ngOnDestroy() {
  //   this.homeServicesSubscription.unsubscribe()
  // }

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


  async presentPopover(ev: any) {
    const popover = await this.popCtrl.create({
      component: VendorhomePopoverComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}
