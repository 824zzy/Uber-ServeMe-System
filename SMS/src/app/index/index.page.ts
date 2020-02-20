import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
  ) { }

  ngOnInit() {
    // console.log('dada')
    // console.log(this.afAuth.auth.currentUser)
    // if(this.afAuth.auth.currentUser){
    //   this.router.navigate(['menu/home/feed'])
    // }
  }

}
