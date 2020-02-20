import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

import { UserService } from '../../user.service'

@Component({
  selector: 'app-testlogin',
  templateUrl: './testlogin.page.html',
  styleUrls: ['./testlogin.page.scss'],
})


export class TestloginPage implements OnInit {

  mainuser: AngularFirestoreDocument
	sub
	username: string
	profilePic: string

	busy: boolean = false

  @ViewChild('fileBtn', {static: false}) fileBtn: {
		nativeElement: HTMLInputElement
	}

   constructor(
		private http: Http, 
		private afs: AngularFirestore,
		private router: Router,
		private alertController: AlertController,
		private user: UserService) {
		this.mainuser = afs.doc(`users/${user.getUID()}`)
		this.sub = this.mainuser.valueChanges().subscribe(event => {
			this.username = event.username
			this.profilePic = event.profilePic
		})
  }
  
 
  ngOnInit(){

  }

  ngOnDestroy() {
		this.sub.unsubscribe()
	}

	updateProfilePic() {
		this.fileBtn.nativeElement.click()
	}

	uploadPic(event) {
		const files = event.target.files

		const data = new FormData()
		data.append('file', files[0])
		data.append('UPLOADCARE_STORE', '1')
		data.append('UPLOADCARE_PUB_KEY', 'ada5e3cb2da06dee6d82')
		
		this.http.post('https://upload.uploadcare.com/base/', data)
		.subscribe(event => {
			const uuid = event.json().file
			this.mainuser.update({
				profilePic: uuid
			})
		})
	}

	async presentAlert(title: string, content: string) {
		const alert = await this.alertController.create({
			header: title,
			message: content,
			buttons: ['OK']
		})

		await alert.present()
	}

  
}




