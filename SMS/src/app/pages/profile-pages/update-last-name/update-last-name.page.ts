import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../user.service'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'

@Component({
  selector: 'app-update-last-name',
  templateUrl: './update-last-name.page.html',
  styleUrls: ['./update-last-name.page.scss'],
})
export class UpdateLastNamePage implements OnInit {

  sub
  mainuser: AngularFirestoreDocument
  username: string;
  lastname: string;
  firstname: string;

  constructor(
    private afs: AngularFirestore,
    public user: UserService
  ) { 
    this.mainuser = afs.doc(`users/${user.getUID()}`)
    this.sub = this.mainuser.valueChanges().subscribe(event => {
			this.lastname = event.lastname
			this.firstname = event.firstname
		})   
  }


  ngOnInit() {
  }

}
