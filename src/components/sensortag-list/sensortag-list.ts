import { Component } from '@angular/core';
import { BLE } from '@ionic-native/ble';
import { JsonPipe } from '@angular/common';
import {BLE_devices} from '../sensortag-list/model_devices'
import { ToastController } from 'ionic-angular';

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

  constructor(private ble : BLE,private toastCtrl: ToastController) {


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


show(index) {

  console.log(this.list[index].name);
  if ((this.list[index].name == null ))  {
    this.presentToast("Device is not a SensorTag.")
  }

else if(this.list[index].name.includes(('CC2650' || 'SensorTag'))) {

   this.ble.connect(this.list[index].id).subscribe(PeripheralData => {
     this.presentToast("connected!")
   },PeripheralData => {
    this.presentToast("disconnected!")
   }
   );
  }

   else   {
   this.presentToast("Device is not a SensorTag.")
   }
}

presentToast(input) {
  let toast = this.toastCtrl.create({
    message: input,
    duration: 3000,
    position: 'bottom'
  });
  toast.present();
};

}
