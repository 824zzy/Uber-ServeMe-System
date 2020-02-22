import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.page.html',
  styleUrls: ['./update-password.page.scss'],
})
export class UpdatePasswordPage implements OnInit {

  showPassword = false;
  passwordToggleIcon = 'eye';

  sub
  mainuser: AngularFirestoreDocument
  email: string;
  newpassword: string

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

  togglePassword(): void{
    this.showPassword = !this.showPassword;
    
    if (this.passwordToggleIcon === 'eye') {
      this.passwordToggleIcon = 'eye-off';
    } else {
      this.passwordToggleIcon = 'eye';
    }
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

		if(!this.newpassword) {
			this.busy = false
			return this.presentAlert('You have to enter a password')
		}

		if(this.newpassword) {
      await this.user.updatePassword(this.newpassword)
      await this.user.updateNewPassword(this.newpassword)

		}
    
    await this.presentAlert('Update password successful!')
    
    this.router.navigate(['/home/me/profile'])
    
    this.busy = false
    
	}
  
}
