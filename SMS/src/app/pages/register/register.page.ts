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
  lastname: string = ""
  firstname: string = ""
  image: string = "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"

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
    const { lastname, firstname, username, password, cpassword, image } = this
    if (password !== cpassword) {
      this.presentRegAlert("Password doesn't match, please try again")
      return console.error("Password doesn't match")
    }

    try { 
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username, password)
      
      this.afstore.doc(`users/${res.user.uid}`).set({
        username,
        password,
        lastname,
        firstname,
        image,
      })

      this.user.setUser({
        username,
        uid: res.user.uid,
        lastname: "",
        firstname: "",
      })
      
      console.log(res)
      this.presentRegAlert("Welcome UberService!")
      this.router.navigate(['/home/feed'])
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
