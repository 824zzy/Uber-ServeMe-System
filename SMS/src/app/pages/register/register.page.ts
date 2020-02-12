import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { auth } from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';

import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string = ""
  password: string = ""
  cpassword: string = ""

  constructor(
    public afAuth: AngularFireAuth,
    public alert: AlertController,
    public router: Router,
    public afstore: AngularFirestore,
    public user: UserService
    ) { }

  ngOnInit() {
  }

  async register() {
    const { username, password, cpassword } = this
    if (password !== cpassword) {
      this.presentAlert("Error", "Password doesn't match, please try again")
      return console.error("Password doesn't match")
    }

    try { 
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username, password)
      
      this.afstore.doc('users/${res.user.uid}').set({
        username
      })

      this.user.setUser({
        username,
        uid: res.user.uid
      })
      
      console.log(res)
      this.presentAlert("Success!", "Welcome UberService!")
      this.router.navigate(['/menu/home/feed'])
    } catch(error) {
      console.dir(error)
      this.presentAlert("Error", error.message)
    }

  }

  async presentAlert(title: string, content: string) {
		const alert = await this.alert.create({
			header: title,
			message: content,
			buttons: ['OK']
		})

		await alert.present()
	}

}
