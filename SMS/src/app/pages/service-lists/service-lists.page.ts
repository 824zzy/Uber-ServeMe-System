import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastController, ModalController, NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore'

import { ServiceMapPage } from '../../modal/service-map/service-map.page';

@Component({
  selector: 'app-service-lists',
  templateUrl: './service-lists.page.html',
  styleUrls: ['./service-lists.page.scss'],
})
export class ServiceListsPage implements OnInit {
  @ViewChild('mapElement', {static: true}) mapElement: any
  public search: string=''
  public service: any
  public searchResults = new Array<any>()
  public destination: any

  vendorList: any[];
  loadVendor: any[];
  flag: boolean = false;
  message: any;
  showSkele: boolean = false;

  constructor(
    public toastCtrl: ToastController,
    public route: Router,
    public activateRoute: ActivatedRoute,
    public nav: NavController,
    public firestore: AngularFirestore,
    public modalCtrl: ModalController,
  ) { 
    // console.log('declared var:', google)

    // this.activateRoute.queryParams.subscribe((data: any) => {
    //   console.log("data.service:", data.service)
    //   this.service = data.service
    //   console.log("service1:", this.service)
    // })

    setTimeout(() => {
      this.showSkele = true;
    }, 2500);
  }

  async ngOnInit() {
    // this.firestore.collection('HomeServices', ref => ref.where('category', "==", this.service)).valueChanges().subscribe( vendorList => {
    this.firestore.collection('HomeServices').valueChanges().subscribe( vendorList => {
      this.vendorList = vendorList;
      this.loadVendor = vendorList;
    })
  }

  async presentModal() {
    // const modal = await this.modalCtrl.create({
    //   component: ServiceMapPage,
    //   // mode: "ios"
    // });
    // return await modal.present();
    this.route.navigate(['home/feed/service-map'])
  }

  
}
