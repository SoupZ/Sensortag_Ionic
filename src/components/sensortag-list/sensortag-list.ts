import { KnownDevicesPage } from './../../pages/known-devices/known-devices';
import { Component } from '@angular/core';
import { BLE } from '@ionic-native/ble';
import { JsonPipe } from '@angular/common';
import { SensortagProvider } from '../../providers/sensortag/KnownTagsService';
import { BLE_Device } from './Models/BLE_devices'
import { ToastController } from 'ionic-angular';
import { NavController } from 'ionic-angular';

import { SensorTagDataPage } from '../../pages/sensor-tag-data/sensor-tag-data';

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

  devices: BLE_Device;

  list: Array<BLE_Device> = new Array<BLE_Device>();


  constructor(private ble: BLE, private toastCtrl: ToastController, public navCtrl: NavController, public knownDeviceService : SensortagProvider) {


    this.searchDevices()
    ble.enable()



  }
  searchDevices() {
    this.ble.startScan([]).subscribe(device => {
      var json_string = JSON.stringify(device);
      var obj = JSON.parse(json_string);

      this.list.push(new BLE_Device(obj.name, obj.id, obj.advertising, obj.rssi));

    });
    // setTimeout(() => {
    //  this.ble.stopScan()

    // }, 5000);
  }


  show(index) {

    //console.log(this.list[index].name);
    if ((this.list[index].name == null)) {
      this.presentToast("Device is not a SensorTag, can't connect")

    }

    else if (this.list[index].name.includes(('CC2650' || 'SensorTag'))) {

      this.ble.connect(this.list[index].id).subscribe(PeripheralData => {
        this.knownDeviceService.addKnownDevice(this.list[index]);
        this.presentToast("connected!")

        this.navCtrl.push(SensorTagDataPage, {
          idDevice: this.list[index].id
        })
      }, PeripheralData => {
        this.presentToast("disconnected!")
      }
      );
    }

    else {
      this.presentToast("Device is not a SensorTag, can't connect.")
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
