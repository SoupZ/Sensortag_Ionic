export class BLE_devices {
  name : string;
  id : string;
  advertising : string;
  rssi : string;


constructor(pname : string, pid : string, padvertising : string, prssi : string) {
this.name = pname;
this.id = pid;
this.advertising = padvertising;
this.rssi = prssi;

}}


