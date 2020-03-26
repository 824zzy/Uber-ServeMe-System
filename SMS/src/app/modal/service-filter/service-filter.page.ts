import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-service-filter',
  templateUrl: './service-filter.page.html',
  styleUrls: ['./service-filter.page.scss'],
})
export class ServiceFilterPage implements OnInit {
  public val: string = "default";
  public filter: string;
  public origin: string;

  constructor(
    public modalCtrl: ModalController,
    public router: Router,
    public firestore: AngularFirestore,
    public activatedRoute: ActivatedRoute,
    public navParams: NavParams,
  ) { 
  }


  ngOnInit() {
    this.val = this.navParams.data.value;
    this.origin = this.navParams.data.value;
    console.log(this.val)
  }
  
  select(event) {
    this.val = event.target.value;
    console.log('aaa',this.val)
    // console.log(this.val)
  }

  // modal jump

  applyDismiss() {
    this.modalCtrl.dismiss(this.val)
  }

  resetDismiss() {
    this.modalCtrl.dismiss("default")
  }

  cancelDismiss() {
    this.modalCtrl.dismiss(this.origin)
  }
}
