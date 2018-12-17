import { FcmProvider } from './../providers/fcm/fcm';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { ToastController } from 'ionic-angular';
import { Subject } from 'rxjs/Subject';
import { tap } from 'rxjs/operators';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,fcm: FcmProvider, toastCtrl: ToastController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

       // Get a FCM token
       fcm.getToken()

       // Listen to incoming messages
       fcm.listenToNotifications().pipe(
         tap(msg => {
           // show a toast
           const toast = toastCtrl.create({
             message: msg.body,
             duration: 2000,
             position: 'top',

           });
           toast.present();
         })
       )
       .subscribe()
    });
  }
}
