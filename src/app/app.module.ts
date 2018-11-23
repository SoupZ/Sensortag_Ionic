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


@NgModule({
  declarations: [
    MyApp,
    SensortagPage,
    SensortagListComponent,
    SensorTagDataPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SensortagPage,
    SensorTagDataPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    BLE,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
