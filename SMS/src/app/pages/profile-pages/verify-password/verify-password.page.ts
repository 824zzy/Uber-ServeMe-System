import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
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
  email: string;
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
			this.email = event.email
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
		await this.user.reAuth(this.user.getUserEmail(), this.password)
	} catch(error) {
		this.busy = false
		return this.presentAlert('Wrong password!')
    } 
    
    await this.router.navigate(['/home/me/profile/update-password'])
    
	this.password = ""
    this.busy = false
    
	}

}
