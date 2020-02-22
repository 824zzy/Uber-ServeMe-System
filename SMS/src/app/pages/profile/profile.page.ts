import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { UserService } from 'src/app/services/user.service';
import { Http } from '@angular/http';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  
  sub
  mainuser: AngularFirestoreDocument
  email: string;
  lastname: string;
  firstname: string;
  profilePic: string;

  @ViewChild('fileBtn', {static: false}) fileBtn: {
		nativeElement: HTMLInputElement
	}

  constructor(
    private http: Http, 
		private router: Router,
		private alertController: AlertController,
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    public user: UserService
  ) { 
    this.mainuser = afs.doc(`users/${afAuth.auth.currentUser.uid}`)
    this.sub = this.mainuser.valueChanges().subscribe(event => {
			this.lastname = event.lastname
			this.email = event.email
      this.firstname = event.firstname
      this.profilePic = event.profilePic
		})   
  }

  ngOnInit() {
  }

  updateProfilePic() {
		this.fileBtn.nativeElement.click()
	}

	uploadPic(event) {
		const files = event.target.files

		const data = new FormData()
		data.append('file', files[0])
		data.append('UPLOADCARE_STORE', '1')
		data.append('UPLOADCARE_PUB_KEY', '29235fd891214a938967')
		
		this.http.post('https://upload.uploadcare.com/base/', data)
		.subscribe(event => {
			const uuid = event.json().file
			this.mainuser.update({
				profilePic: uuid
			})
		})
	}
}
