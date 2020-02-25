import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
})
export class ReviewPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logRatingChange(rating){
    console.log("changed rating: ",rating);
    // do your stuff
}

}
