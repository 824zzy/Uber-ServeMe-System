import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(
    private router: Router,
    public afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
  }
  
  navigateToLoginPage(){
    if(this.afAuth.auth.currentUser){
      this.router.navigate(['menu/home/feed'])
    } else {
      this.router.navigate(['login'])
    }    
  }
}
