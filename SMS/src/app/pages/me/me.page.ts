import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from '../../services/user.service'
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-me',
  templateUrl: './me.page.html',
  styleUrls: ['./me.page.scss'],
})
export class MePage implements OnInit {

  sub
  mainuser: AngularFirestoreDocument
  lastname: string;
  firstname: string;
  profilePic: string;

  constructor(
    public user: UserService,
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth
    ) { 
    this.mainuser = afs.doc(`users/${afAuth.auth.currentUser.uid}`)
    this.sub = this.mainuser.valueChanges().subscribe(event => {
			this.lastname = event.lastname
      this.firstname = event.firstname
      this.profilePic = event.profilePic
		})   
  }

  ngOnInit() {
  }

}
