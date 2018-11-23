import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  public firstParam;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.firstParam = navParams.get("firstPassed");
    console.log(this.firstParam);
  }

  ionViewWillLeave() {
    console.log("Looks like I'm about to leave :(");
  }

}
