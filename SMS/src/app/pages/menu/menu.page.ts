import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from 'src/app/services/user.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  
  sub
  mainuser: AngularFirestoreDocument
  lastname: string;
  firstname: string;

  pages = [
    {
      title: 'Home',
      url: '/menu/home/feed',
    },
    {
      title: 'Wallet',
      url: '/menu/payment',
    },
    {
      title: 'Order history',
      url: '/menu/history',
    },
    {
      title: 'Settings',
      url: '/menu/settings',
    },
  ]

  selectedPath = ''

  constructor(
    private router: Router,
    public user: UserService,
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth
    ) { 
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
    this.mainuser = afs.doc(`users/${afAuth.auth.currentUser.uid}`)
    this.sub = this.mainuser.valueChanges().subscribe(event => {
			this.lastname = event.lastname
			this.firstname = event.firstname
    })
    // console.log('menu:', afs.doc(`users/${afAuth.auth.currentUser.uid}/firstname`))   
  }

  ngOnInit() {
  }
}
