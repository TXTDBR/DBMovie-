import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//mport { TabsPage } from '../pages/tabs/tabs';
import { IntroPage } from '../pages/intro/intro';
import { ConfigProvider } from '../providers/config/config';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html',
  providers: [
    ConfigProvider
  ]
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform,
     statusBar: StatusBar,
      splashScreen: SplashScreen,
      private cProvider: ConfigProvider) {
    platform.ready().then(() => {
      
      statusBar.styleDefault();
      splashScreen.hide();
    });

    let config = this.cProvider.getPerfil();

    if(config == null){
      this.rootPage = IntroPage;
      this.cProvider.setConfig(false);
    }else{
      this.rootPage = TabsPage;
    }


  }
}
