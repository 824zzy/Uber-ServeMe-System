import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { PopoverController } from '@ionic/angular'

@Component({
  selector: 'vendorhome-popover',
  templateUrl: './vendorhome-popover.component.html',
  styleUrls: ['./vendorhome-popover.component.scss'],
})
export class VendorhomePopoverComponent implements OnInit {

  constructor(
    public route: Router,
    public popCtrl: PopoverController,
  ) { }

  ngOnInit() {}

  navToAddService(){
    this.popCtrl.dismiss()
    this.route.navigate(["/add-service"])
  }

  navToVendorLocation(){
    this.popCtrl.dismiss()
    this.route.navigate(["/vendor-location"])
  }
}
