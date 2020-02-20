import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../user.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-verify-password',
  templateUrl: './verify-password.page.html',
  styleUrls: ['./verify-password.page.scss'],
})
export class VerifyPasswordPage implements OnInit {

  
  sub
  mainuser: AngularFirestoreDocument
  username: string;
  password: string

	busy: boolean = false

  constructor(
	private router: Router,
	private toastController: ToastController,
    private afs: AngularFirestore,
	public user: UserService,
	public afAuth: AngularFireAuth,
  ) { 
    this.mainuser = afs.doc(`users/${afAuth.auth.currentUser.uid}`)
    this.sub = this.mainuser.valueChanges().subscribe(event => {
			this.username = event.username
		})   
  }

	ngOnInit() {
	}

  ngOnDestroy() {
		this.sub.unsubscribe()
  }
  
  async presentAlert(content: string) {
		const alert = await this.toastController.create({
			message: content,
      duration: 2000,
      position: 'top'
		})

		await alert.present()
	}

  async updateDetails() {
		this.busy = true

		if(!this.password) {
			this.busy = false
			return this.presentAlert('You have to enter a password')
		}

		try {
			await this.user.reAuth(this.user.getUsername(), this.password)
		} catch(error) {
			this.busy = false
			return this.presentAlert('Wrong password!')
    } 
    
    await this.router.navigate(['/menu/profile/update-password'])
    
		this.password = ""
    this.busy = false
    
	}

}
