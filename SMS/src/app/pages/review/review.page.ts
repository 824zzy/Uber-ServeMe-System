import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
})
export class ReviewPage implements OnInit {
  public review: any
  public order: any 

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state) {
        this.order = this.router.getCurrentNavigation().extras.state.orderDetail
      }
      console.log(this.order.id)
    })
  }

  ngOnInit() {
  }

  logRatingChange(rating){
    console.log("changed rating: ",rating);
    console.log(this.review)
    // do your stuff
}

}
