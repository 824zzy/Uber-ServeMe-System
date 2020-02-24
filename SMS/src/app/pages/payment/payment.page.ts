import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  private homeServiceId: string = null
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state) {
        this.homeServiceId = this.router.getCurrentNavigation().extras.state.id
      }
    })
    
    console.log(this.homeServiceId)
   }

  ngOnInit() {
  }

  pay(){
    console.log("pay successful")
  }

}
