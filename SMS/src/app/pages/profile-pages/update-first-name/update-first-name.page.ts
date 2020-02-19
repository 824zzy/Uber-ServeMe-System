import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../user.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

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
    public user: UserService
  ) { 
    this.mainuser = afs.doc(`users/${user.getUID()}`)
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
    this.user.updateFirstName(this.user.getUID(), newName)

    await this.presentAlert('Your First Name was updated!')

    this.router.navigate(['/menu/profile'])
  }
}
