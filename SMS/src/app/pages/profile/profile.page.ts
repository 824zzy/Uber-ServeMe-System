import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Http } from '@angular/http';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from '../../user.service'
import { User } from 'firebase';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  
  sub
  mainuser: AngularFirestoreDocument
  username: string;
  lastname: string;
  firstname: string;
  profilePic: string;

  @ViewChild('fileBtn', {static: false}) fileBtn: {
		nativeElement: HTMLInputElement
	}

  constructor(
    private http: Http, 
		private afs: AngularFirestore,
		private router: Router,
		private alertController: AlertController,
    public user: UserService
  ) { 
    this.mainuser = afs.doc(`users/${user.getUID()}`)
    this.sub = this.mainuser.valueChanges().subscribe(event => {
			this.lastname = event.lastname
			this.username = event.username
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
