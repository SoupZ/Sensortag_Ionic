import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';

@Component({
  selector: 'page-home',
  templateUrl: 'sensortag.html'
})
export class SensortagPage {

  constructor(public navCtrl: NavController,private ble: BLE) {

  }

}
