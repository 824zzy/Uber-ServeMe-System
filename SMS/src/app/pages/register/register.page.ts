import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';
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
    public toast: ToastController,
    public router: Router,
    public afstore: AngularFirestore,
    public user: UserService,
    ) { }

  ngOnInit() {
  }

  async register() {
    const { username, password, cpassword } = this
    if (password !== cpassword) {
      this.presentRegAlert("Password doesn't match, please try again")
      return console.error("Password doesn't match")
    }

    try { 
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username, password)
      
      this.afstore.doc(`users/${res.user.uid}`).set({
        username,
      })

      this.user.setUser({
        username,
        uid: res.user.uid
      })
      
      console.log(res)
      this.presentRegAlert("Welcome UberService!")
      this.router.navigate(['/menu/home/feed'])
    } catch(error) {
      console.dir(error)
      this.presentRegAlert(error.message)
    }

  }

  async presentRegAlert(content: string) {
		const toast = await this.toast.create({

			message: content,
      position: 'top',
      duration: 2000
		})
		await toast.present()
  }

}
