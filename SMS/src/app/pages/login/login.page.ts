import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase/app';
import { LoadingController, AlertController, ToastController, Platform } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx' ;
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { environment } from '../../../environments/environment';
import { UserService } from 'src/app/services/user.service';
// import { customAlertEnter } from '../../customAlertEnter';
import {FirebaseUIModule, firebase, firebaseui} from 'firebaseui-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire'
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = ""
  password: string = ""

  showPassword = false;
  passwordToggleIcon = 'eye';

  constructor(
    public afAuth: AngularFireAuth,
    public loadingController: LoadingController,
    private googlePlus: GooglePlus,
    private router: Router,
    private nativeStorage: NativeStorage,
    private platform: Platform,
    public alertController: AlertController,
    public toastController: ToastController,
    public user: UserService,
    public afstore: AngularFirestore,
    ) { }

  ngOnInit() {
  }
  successCallback() {
    if(this.afstore.doc(`users/${this.afAuth.auth.currentUser.uid}`).get()) {
      this.afstore.doc(`users/${this.afAuth.auth.currentUser.uid}`).set({
        email: this.afAuth.auth.currentUser.email,
        lastname: "Please edit",
        firstname: "",
      })
    }
    this.router.navigate(['/home/feed'])
  }

  errorCallback(errorData) {
    console.log(errorData)
  }  

  togglePassword(): void{
    this.showPassword = !this.showPassword;
    
    if (this.passwordToggleIcon === 'eye') {
      this.passwordToggleIcon = 'eye-off';
    } else {
      this.passwordToggleIcon = 'eye';
    }
  }


  async login() {
    const { email, password } = this
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(email, password)
      if(res.user) {
          this.router.navigate(['/home/feed'])
      }
    } catch(err) {
      console.dir(err)
      if (err.code === "auth/user-not-found") {
        console.log("User not found")
      }
      this.showAlert(err.message)
    }
  }

  async showAlert(message: string){
    const alert = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top',
      // enterAnimation: customAlertEnter
    })

    await alert.present()
  }

  async presentAlert() {
    const alert = await this.alertController.create({
       message: 'Cordova is not available on desktop. Please try this in a real device or in an emulator.',
       buttons: ['OK']
     });

    await alert.present();
  }

  async presentLoading(loading) {
    return await loading.present();
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/'])
    })
  }
}
