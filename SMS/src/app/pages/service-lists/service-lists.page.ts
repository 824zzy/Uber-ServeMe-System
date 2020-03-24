import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastController, ModalController, NavController, IonContent } from '@ionic/angular';
import { Router, ActivatedRoute, Params, RoutesRecognized, NavigationExtras } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore'

import { ServiceFilterPage } from '../../modal/service-filter/service-filter.page';

@Component({
  selector: 'app-service-lists',
  templateUrl: './service-lists.page.html',
  styleUrls: ['./service-lists.page.scss'],
})
export class ServiceListsPage implements OnInit {

  @ViewChild('mapElement', {static: true}) mapElement: any
  public search: string=''
  public service: string=''
  public searchResults = new Array<any>()
  public destination: any

  public vendorList = new Array<any>()
  public loadVendor = new Array<any>()
  flag: boolean = false;
  message: any;
  showSkele: boolean = false;

  constructor(
    public toastCtrl: ToastController,
    public route: Router,
    public activatedRoute: ActivatedRoute,
    public nav: NavController,
    public firestore: AngularFirestore,
    public modalCtrl: ModalController,
  ) { 
  }

  async ngOnInit() {
    // pass category through router
    this.service = this.activatedRoute.snapshot.params['service'];
    console.log("dada", this.service)
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

    setTimeout(() => {
      this.showSkele = true;
    }, 1000);
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ServiceFilterPage,
      // mode: "ios"
    });
    return await modal.present();
  }  

  async goMap() {
    this.route.navigate(['home/feed/service-map', this.service])
  }  

  navBack() {
    this.nav.back();
  }

  async toConfirm(v) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        vendor: JSON.stringify(v),
        back: "home"
      }
    }
    this.route.navigate(['home/feed/service-lists/service-confirm'], navigationExtras)
  }
}
