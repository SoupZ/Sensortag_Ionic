import { Component } from '@angular/core';
import { BLE } from '@ionic-native/ble';

/**
 * Generated class for the SensortagListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sensortag-list',
  templateUrl: 'sensortag-list.html'
})
export class SensortagListComponent {

  text: string;

  constructor(private ble : BLE) {



       ble.enable()
       


  }
     Search_Devices() {
  this.ble.startScan([]).subscribe(device => {
    console.log(JSON.stringify(device));

  });

  setTimeout(() => {
   this.ble.stopScan();
  }, 5000);
}}

