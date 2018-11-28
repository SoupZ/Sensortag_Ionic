import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SensortagProvider } from '../../providers/sensortag/KnownTagsService';
import { BLE_Device } from '../../components/sensortag-list/Models/BLE_devices';

/**
 * Generated class for the KnownDevicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-known-devices',
  templateUrl: 'known-devices.html',
})
export class KnownDevicesPage {
  pairedlist: Array<BLE_Device> = new Array<BLE_Device>();
  constructor(public navCtrl: NavController, public navParams: NavParams,public knownDevices : SensortagProvider) {

    this.pairedlist = knownDevices.getKnownDevices();
    console.log(this.pairedlist)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KnownDevicesPage');
  }

  showTappedDevice(i) {

  }


}
