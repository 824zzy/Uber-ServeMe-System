import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-update-last-name',
  templateUrl: './update-last-name.page.html',
  styleUrls: ['./update-last-name.page.scss'],
})
export class UpdateLastNamePage implements OnInit {

  sub
  mainuser: AngularFirestoreDocument
  lastname: string;

  constructor(
    private router: Router,
		private toastController: ToastController,
    private afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public user: UserService
  ) { 
    this.mainuser = afs.doc(`users/${afAuth.auth.currentUser.uid}`)
    this.sub = this.mainuser.valueChanges().subscribe(event => {
			this.lastname = event.lastname
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


  async updateLastName(newName) {
    this.user.updateLastName(newName)
    await this.presentAlert('Your Last Name was updated!')
    this.router.navigate(['/home/me/profile'])
  }
}
