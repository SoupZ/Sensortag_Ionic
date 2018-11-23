export abstract class Services {
  public static readonly barometerGATTService : string = "F000AA40-0451-4000-B000-000000000000"; // service AA40
  public static readonly barometerGATTSCharacteristic  : string = "F000AA42-0451-4000-B000-000000000000"; // wake AA42
  public static readonly barometerGATTDATA : string = "F000AA41-0451-4000-B000-000000000000" //data AA41

  public static doSomething(): string {
    return "World";
  }
}
