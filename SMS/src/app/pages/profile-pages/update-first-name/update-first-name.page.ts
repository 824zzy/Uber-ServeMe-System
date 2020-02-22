import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-update-first-name',
  templateUrl: './update-first-name.page.html',
  styleUrls: ['./update-first-name.page.scss'],
})
export class UpdateFirstNamePage implements OnInit {

  sub
  mainuser: AngularFirestoreDocument
  firstname: string;

  constructor(
    private router: Router,
		private toastController: ToastController,
    private afs: AngularFirestore,
    public user: UserService,
    public afAuth: AngularFireAuth,
  ) { 
    this.mainuser = afs.doc(`users/${afAuth.auth.currentUser.uid}`)
    this.sub = this.mainuser.valueChanges().subscribe(event => {
			this.firstname = event.firstname
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


  async updateFirstName(newName) {
    this.user.updateFirstName(newName)

    await this.presentAlert('Your First Name was updated!')

    this.router.navigate(['/home/me/profile'])
  }
}
