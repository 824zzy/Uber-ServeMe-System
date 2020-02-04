import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Environment } from '@ionic-native/google-maps';

import { CoreService } from './core/core.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public core: CoreService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      Environment.setEnv({
        
        // api key for server
        'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBfdfHVfFgZbqw40ZBzZZa7kMTrEOvxarg',
        // api key for local develoment
        'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBfdfHVfFgZbqw40ZBzZZa7kMTrEOvxarg'

      });

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
