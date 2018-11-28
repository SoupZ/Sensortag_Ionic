import { SensortagProvider } from '../../providers/sensortag/KnownTagsService';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';
import { Services } from '../../components/sensortag-list/Models/Sensortag_Services';





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
  private temperature : string = "0";



  constructor(public navCtrl: NavController, public navParams: NavParams, private ble: BLE, private toastCtrl: ToastController) {
    this.idDevice = navParams.get("idDevice");
    ble.enable()
    //console.log(this.idDevice);
    this.wakeSensors();
  }
  ionViewDidEnter() {
    this.temp_call().then(data => this.presentToast(data))
  }
  ionViewWillLeave() {
    this.ble.disconnect(this.idDevice).then(() => {
      this.presentToast("Disconnected from device");
    });
  }


  wakeSensors() {
    this.wakeBarometer();

  }

  wakeBarometer() {
    var data = new Uint8Array(1);
    data[0] = 1;

    this.ble.write(this.idDevice, Services.barometerGATTService, Services.barometerGATTSCharacteristic, data.buffer).then((callback: string) =>
      console.log(callback)
    )

      .catch((error: any) => console.log(error))

  }



  getDataBarometer() {
    this.ble.read(this.idDevice, Services.barometerGATTService, Services.barometerGATTDATA).then((data: ArrayBuffer) =>
      this.bytesToString(data)
    ).catch((error: any) => console.log("Error, can't wake up Barometer sensor"))
  }


  presentToast(input) {
    let toast = this.toastCtrl.create({
      message: input,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  // Plugin uses typed Arrays or ArrayBuffers for sending and receiving data.
  // Means that you need convert your data to ArrayBuffers before sending and from ArrayBuffers when receiving.
  // ASCII only
  stringToBytes(string) {

    var array = new Uint8Array(string.length);
    for (var i = 0, l = string.length; i < l; i++) {
      array[i] = string.charCodeAt(i);
    }
    console.log(this.bytesToString(string))
    return array.buffer;

  }



  bytesToString(buffer) {
    var datahex = Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('');
    //console.log(datahex);

    this.calculateTemp(datahex);


  }
  calculateTemp(rawdata) {
    var temperature = rawdata[5] + rawdata[4] + rawdata[2] + rawdata[3] + rawdata[0] + rawdata[1];
    var datatmp = parseInt(temperature, 16);
    this.temperature = ((datatmp / 100) + "°C");
  }



  temp_call() {
    return new Promise((resolve, reject) => {
      setInterval(() => {
        this.getDataBarometer();
        resolve("done")
      }, 5000);


    })
  }



}
