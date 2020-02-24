import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

import { GooglePlus} from '@ionic-native/google-plus/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { UserService } from './services/user.service';
import { AngularFirestore } from '@angular/fire/firestore'

import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx'

// photo upload
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { HttpModule } from '@angular/http'

// import { customAlertEnter } from './customAlertEnter'
import {FirebaseUIModule, firebase, firebaseui} from 'firebaseui-angular';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { GoogleMaps } from '@ionic-native/google-maps';
// import { Geolocation } from "@ionic-native/geolocation";

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    // firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      scopes: [
        'public_profile',
        'email',
        'user_likes',
        'user_friends'
      ],
      customParameters: {
        'auth_type': 'reauthenticate'
      },
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
    },
    // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    // firebase.auth.GithubAuthProvider.PROVIDER_ID,
    // {
    //   requireDisplayName: false,
    //   provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
    // },
    // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  tosUrl: '/login',
  privacyPolicyUrl: '/login',
  // credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
  credentialHelper: firebaseui.auth.CredentialHelper.NONE,
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot({
      // toastEnter: customAlertEnter
    }), 
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, 
    AngularFireStorageModule,
    AngularFireAuthModule,
    HttpModule,
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
  ],
  providers: [
    GoogleMaps,
    NativeStorage,
    GooglePlus,
    StatusBar,
    SplashScreen,
    NativePageTransitions,
    UserService,
    AngularFirestore,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
