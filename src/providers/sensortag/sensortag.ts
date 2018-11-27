import { BLE_Device } from './../../components/sensortag-list/Models/BLE_devices';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



/*
  Generated class for the SensortagProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SensortagProvider {

  constructor(public http: HttpClient) {
    console.log('Hello SensortagProvider Provider');
  }
  getDevice() { return BLE_Device; }
}
