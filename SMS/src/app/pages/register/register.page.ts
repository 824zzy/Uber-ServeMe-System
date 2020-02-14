import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { auth } from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoadingController, AlertController, Platform } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx' ;
import { environment } from '../../../environments/environment';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
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
    public loadingController: LoadingController,
    private googlePlus: GooglePlus,
    public alert: AlertController,
    public router: Router,
    public afstore: AngularFirestore,
    public user: UserService,
    private nativeStorage: NativeStorage,
    private platform: Platform,
    public alertController: AlertController,
    ) { }

  ngOnInit() {
  }

  async register() {
    const { username, password, cpassword } = this
    if (password !== cpassword) {
      this.presentRegAlert("Error", "Password doesn't match, please try again")
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
      this.presentRegAlert("Success!", "Welcome UberService!")
      this.router.navigate(['/menu/home/feed'])
    } catch(error) {
      console.dir(error)
      this.presentRegAlert("Error", error.message)
    }

  }

  async presentRegAlert(title: string, content: string) {
		const alert = await this.alert.create({
			header: title,
			message: content,
			buttons: ['OK']
		})
		await alert.present()
  }
  
  async doGoogleLogin(){
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    this.presentLoading(loading);
  
    this.googlePlus.login({
      'scopes': '', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
      'webClientId': environment.googleWebClientId, // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
      'offline': true // Optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
    })
    .then(user =>{

      this.nativeStorage.setItem('google_user', {
        name: user.displayName,
        email: user.email,
        picture: user.imageUrl
      })
      .then(() =>{
        this.router.navigate(['/menu/home/feed']);
      }, (error) =>{
        console.log(error);
      })
      loading.dismiss();
    }, err =>{
      console.log(err);
      if (!this.platform.is('cordova')){
        this.presentAlert();
      }
      loading.dismiss();
    });
  }

  async presentLoading(loading) {
    return await loading.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
       message: 'Cordova is not available on desktop. Please try this in a real device or in an emulator.',
       buttons: ['OK']
     });

    await alert.present();
  }

}
