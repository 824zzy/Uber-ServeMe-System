import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Environment } from '@ionic-native/google-maps';
import { timer } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  showSplash = true;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  ) {
    this.initializeApp();
  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      Environment.setEnv({      
        'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBfdfHVfFgZbqw40ZBzZZa7kMTrEOvxarg',
        'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBfdfHVfFgZbqw40ZBzZZa7kMTrEOvxarg'
      });
      this.statusBar.overlaysWebView(false);
      this.statusBar.styleLightContent();
      setTimeout(() => {
        this.splashScreen.hide();
      }, 300);
      timer(3000).subscribe(() => this.showSplash = false)
    });
  }
}
