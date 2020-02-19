import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../user.service'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'

@Component({
  selector: 'app-update-first-name',
  templateUrl: './update-first-name.page.html',
  styleUrls: ['./update-first-name.page.scss'],
})
export class UpdateFirstNamePage implements OnInit {

  sub
  mainuser: AngularFirestoreDocument
  firstname: string;
  users: any;

  constructor(
    private afs: AngularFirestore,
    public user: UserService
  ) { 
    this.mainuser = afs.doc(`users/${user.getUID()}`)
    this.sub = this.mainuser.valueChanges().subscribe(event => {
			this.firstname = event.firstname
		})   
  }

  ngOnInit() {
    this.user.readUsers().subscribe(data => {
 
      this.users = data.map(e => {
        return {
          id: e.payload.doc.id,
          Name: e.payload.doc.data()['firstname'],
          isEdit: false,
        };
      })
      console.log(this.users);
    });
  }

  updateFirstName(name) {
    this.user.updateFirstName(name.id, name)
  }




}
