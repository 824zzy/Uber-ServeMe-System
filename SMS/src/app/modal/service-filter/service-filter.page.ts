import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-service-filter',
  templateUrl: './service-filter.page.html',
  styleUrls: ['./service-filter.page.scss'],
})
export class ServiceFilterPage implements OnInit {

  constructor(
    public modalCtrl: ModalController,
    public router: Router,
    public firestore: AngularFirestore
  ) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    })
  }

  navToConfirmPage(vendor) {
    
    this.modalCtrl.dismiss({
      'dismissed': true
    })

  }
}
