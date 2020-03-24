import { Component, OnInit, ViewChild, ElementRef, Renderer } from '@angular/core';
import { ToastController, ModalController, IonContent } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

import { SearchDisplayPage } from '../../modal/search-display/search-display.page';
import { ScrollHideConfig } from '../../directives/expandable-header.directive';

import { Keyboard } from '@ionic-native/keyboard/ngx'


@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  vendorList: any[];
  loadVendor: any[];
  
  headerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-top', maxValue: 150 };

  constructor(
    public modalCtrl: ModalController,
    public router: Router,
    private firestore: AngularFirestore,
    public keyboard: Keyboard,
    public element: ElementRef,
    public renderer: Renderer,
  ) { 
  }

  async ngOnInit() {
    this.firestore.collection('HomeServices').valueChanges().subscribe( vendorList => {
      this.vendorList = vendorList;
      this.loadVendor = vendorList;
    });
  }

  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  async presentModal() {
    this.keyboard.hide();
    const modal = await this.modalCtrl.create({
      component: SearchDisplayPage,
      // mode: "ios",      
    });
    return await modal.present();
  }

  async toConfirm(v) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        vendor: JSON.stringify(v),
        back: "home"
      }
    }
    this.router.navigate(['home/feed/service-lists/service-confirm'], navigationExtras)
  }
}