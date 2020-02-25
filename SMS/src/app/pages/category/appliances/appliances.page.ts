import { Component, OnInit, ElementRef, Renderer2, ViewChild, NgZone } from '@angular/core';
import { ToastController, Platform, LoadingController, NavController } from '@ionic/angular';
import { GoogleMap, GoogleMaps, GoogleMapsEvent, Marker, GoogleMapsAnimation, MyLocation, Environment, GoogleMapOptions, Geocoder, ILatLng } from '@ionic-native/google-maps';
import { Router, ActivatedRoute } from '@angular/router';


// FIXME

import { AngularFirestore } from '@angular/fire/firestore'

@Component({
  selector: 'app-appliances',
  templateUrl: './appliances.page.html',
  styleUrls: ['./appliances.page.scss'],
})
export class AppliancesPage implements OnInit {

  service: string;
  vendorList: any[];
  loadVendor: any[];
  flag: boolean = false;

  constructor(
    public route: Router,
    public nav: NavController,
    private elementRef: ElementRef,
    private renderer: Renderer2,


    // FIXME
    public firestore: AngularFirestore,
    public activateRoute: ActivatedRoute,

  ) { 

  }

  async ngOnInit() {
    this.activateRoute.queryParams.subscribe((data: any) => {
      console.log("data.service:", data.service)
      this.service = data.service
    })

    let searchIcon = this.elementRef.nativeElement.querySelector('.blank');
    // console.log('searchCSS:',searchIcon)
      if(searchIcon != null) {
        this.renderer.listen(searchIcon, 'click', () => {
          // console.log('gooo')
          this.route.navigate(['home/feed'])
        });
      }


      this.firestore.collection('HomeServices', ref => ref.where('category', "==", this.service)).valueChanges().subscribe( vendorList => {
        this.vendorList = vendorList;
        this.loadVendor = vendorList;
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
        return false;
      }
    })
  }



}





