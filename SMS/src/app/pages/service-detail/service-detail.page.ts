import { Component, OnInit } from '@angular/core';
// import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/interfaces/home-service';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.page.html',
  styleUrls: ['./service-detail.page.scss'],
})
export class ServiceDetailPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
