import { BLE_Device } from '../../components/sensortag-list/Models/BLE_devices';
import { Injectable } from '@angular/core';



/*
  Generated class for the SensortagProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SensortagProvider {

  pairedlist: Array<BLE_Device> = new Array<BLE_Device>();

  constructor() {
    console.log('Hello SensortagProvider Provider');
  }


addKnownDevice(device) {
  //console.log(device);
  //if(this.pairedlist.indexOf(device) === -1) { // check if unique
    this.pairedlist.push(device);
   //console.log(device);

 // }
}

  getKnownDevices() { return this.pairedlist; }
}
