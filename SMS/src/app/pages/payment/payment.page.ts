import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  private homeService: any
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state) {
        this.homeService = this.router.getCurrentNavigation().extras.state.homeService
      }
    })
   }

  ngOnInit() {
  }

  pay(){
    console.log("After pay successful")
    this.userService.addOrder(this.homeService)
  }

}
