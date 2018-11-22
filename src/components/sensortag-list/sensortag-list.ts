import { Component } from '@angular/core';
import { BLE } from '@ionic-native/ble';
import { JsonPipe } from '@angular/common';
import {BLE_devices} from '../sensortag-list/model_devices'

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

   devices : BLE_devices;

   list : Array<BLE_devices> = new Array<BLE_devices>();

  constructor(private ble : BLE) {


    this.Search_Devices()
       ble.enable()



  }
     Search_Devices() {
  this.ble.startScan([]).subscribe(device => {
     var json_string  = JSON.stringify(device);
   var obj = JSON.parse(json_string);

    this.list.push(new BLE_devices(obj.name,obj.id,obj.advertising,obj.rssi));

});
  // setTimeout(() => {
  //  this.ble.stopScan()

  // }, 5000);
}

};


