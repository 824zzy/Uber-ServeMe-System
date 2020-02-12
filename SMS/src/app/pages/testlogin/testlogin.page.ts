import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-testlogin',
  templateUrl: './testlogin.page.html',
  styleUrls: ['./testlogin.page.scss'],
})


export class TestloginPage implements OnInit {

  public recaptchaVerifier: firebase.auth.RecaptchaVerifier;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  // ionViewDidLoad(){
  //   this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  // }

  signIn(phoneNumber: number){
    const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    const phoneNumberString = "+" + phoneNumber;
    firebase.auth().signInWithPhoneNumber(phoneNumberString, appVerifier)
      .then( async confirmationResult => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        let prompt = await this.alertCtrl.create({
        header: 'Enter the Confirmation code',
        inputs: [{ name: 'confirmationCode', placeholder: 'Confirmation Code' }],
        buttons: [
          { text: 'Cancel',
            handler: data => { console.log('Cancel clicked'); }
          },
          { text: 'Send',
            handler: data => {
              confirmationResult.confirm(data.confirmationCode)
                .then(function (result) {
                  // User signed in successfully.
                  console.log(result.user);
                  // ...
                }).catch(function (error) {
                  // User couldn't sign in (bad verification code?)
                  // ...
                });
            }
          }
        ]
      });
      await prompt.present();
    })
    .catch(function (error) {
      console.error("SMS not sent", error);
    });
    
  }

}




