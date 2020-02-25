import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  public service: string=''
  
  constructor(
    public toastCtrl: ToastController,
    public router: Router,
  ) {
  }

  async ngOnInit() {
  }

  navigateToService() {
    this.router.navigate['/']
  }
}
