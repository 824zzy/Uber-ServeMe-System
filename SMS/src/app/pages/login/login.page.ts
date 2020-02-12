import { Component, OnInit } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { LoadingController, AlertController, Platform } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx' ;
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { environment } from '../../../environments/environment';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = ""
  password: string = ""

  constructor(public afAuth: AngularFireAuth,
    public loadingController: LoadingController,
    private googlePlus: GooglePlus,
    private router: Router,
    private nativeStorage: NativeStorage,
    private platform: Platform,
    public alertController: AlertController,
    public user: UserService,
    ) { }

  ngOnInit() {
  }

  async login() {
    const { username, password } = this
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username, password)

      if(res.user) {
          this.user.setUser({
            username,
            uid: res.user.uid
          })
          this.router.navigate(['/menu/home/feed'])
      }


    } catch(err) {
      console.dir(err)
      if (err.code === "auth/user-not-found") {
        console.log("User not found")
      }
      this.showAlert('Error', err.message)
    }

  }

  async showAlert(title: string, message: string){
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['Ok']
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

}
