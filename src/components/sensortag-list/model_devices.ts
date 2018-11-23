 export class BLE_devices {
  name : string;
  id : string;
  advertising : string;
  rssi : string;

  public  readonly barometerGATTService : string = "F000AA40-0451-4000-B000-000000000000"; // service AA40
  public  readonly barometerGATTSCharacteristic  : string = "F000AA42-0451-4000-B000-000000000000"; // wake AA42
  public  readonly barometerGATTData : string = "F000AA41-0451-4000-B000-000000000000" //data AA41


constructor(pname : string, pid : string, padvertising : string, prssi : string) {
this.name = pname;
this.id = pid;
this.advertising = padvertising;
this.rssi = prssi;

}

}



