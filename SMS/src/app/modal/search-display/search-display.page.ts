import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonInput } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-search-display',
  templateUrl: './search-display.page.html',
  styleUrls: ['./search-display.page.scss'],
})
export class SearchDisplayPage implements OnInit {

  @ViewChild('myInput', {static: true}) myInput: IonInput;

  vendorList: any[];
  loadVendor: any[];
  flag: boolean = false;
  message: any;

  constructor(
    public modalCtrl: ModalController,
    public router: Router,
    public firestore: AngularFirestore
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.myInput.setFocus();
    }, 200)
    this.firestore.collection('HomeServices').valueChanges().subscribe( vendorList => {
      this.vendorList = vendorList;
      this.loadVendor = vendorList;
    })
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    })
  }

  initializeItems(): void {
    this.vendorList = this.loadVendor;
    this.flag = true;
  }

  searchChanged(event) {
    this.initializeItems();
    const searchVendor = event.srcElement.value;

    if (!searchVendor) {
      this.flag = false;
      return;
    }
    this.vendorList = this.vendorList.filter(currentVendor => {
      if (currentVendor.name && searchVendor) {
        if (currentVendor.name.toLowerCase().indexOf(searchVendor.toLowerCase()) > -1) {
          return true;
        } 
        // do not show empty list
        // this.flag = false;
        return false;
      } 
      // this.flag = false;
    })
    console.log(this.vendorList);
  }

  navToConfirmPage(vendor) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        vendor: JSON.stringify(vendor),
        back: "home"
      }
    }
    this.message = ""
    this.flag = false;
    this.router.navigate(['home/feed/service-lists/service-confirm'], navigationExtras)
    
    this.modalCtrl.dismiss({
      'dismissed': true
    })

  }

}
