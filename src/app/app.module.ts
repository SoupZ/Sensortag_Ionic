
import { AngularFirestore } from '@angular/fire/firestore';
import { KnownDevicesPage } from './../pages/known-devices/known-devices';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SensortagListComponent } from '../components/sensortag-list/sensortag-list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SensortagPage } from '../pages/Sensortag/sensortag';
import { BLE } from '@ionic-native/ble';
import { SensorTagDataPage } from '../pages/sensor-tag-data/sensor-tag-data';
import { SensortagProvider } from '../providers/sensortag/KnownTagsService';
import { FcmProvider } from '../providers/fcm/fcm';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Firebase } from '@ionic-native/firebase'

var firebase = {
  apiKey: "AIzaSyBmWYtwW3WG6pOO4P0NVm07awPIjT6UvDg",
  authDomain: "sensortag-ble.firebaseapp.com",
  databaseURL: "https://sensortag-ble.firebaseio.com",
  projectId: "sensortag-ble",
  storageBucket: "sensortag-ble.appspot.com",
  messagingSenderId: "777633180166"
};

@NgModule({
  declarations: [
    MyApp,
    SensortagPage,
    SensortagListComponent,
     SensorTagDataPage,
     HomePage,
     KnownDevicesPage,
     TabsPage
  ],
  imports: [
    BrowserModule,

    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
     SensortagPage,
     SensorTagDataPage,
     KnownDevicesPage,
     HomePage,
     TabsPage
  ],
  providers: [
    StatusBar,
    BLE,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SensortagProvider,

     Firebase,
   AngularFirestore,
    FcmProvider
  ]
})
export class AppModule {}
