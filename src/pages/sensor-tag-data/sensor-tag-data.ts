import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';

/**
 * Generated class for the SensorTagDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sensor-tag-data',
  templateUrl: 'sensor-tag-data.html',
})
export class SensorTagDataPage {
  private idDevice;



  constructor(public navCtrl: NavController, public navParams: NavParams,private ble: BLE,private toastCtrl: ToastController) {
    this.idDevice = navParams.get("idDevice");
    ble.enable()
    console.log(this.idDevice);
  }

  ionViewWillLeave() {
    this.ble.disconnect(this.idDevice).then(() => {
      this.presentToast("Disconnected from device");

    });
  }

  presentToast(input) {
    let toast = this.toastCtrl.create({
      message: input,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
}
}
