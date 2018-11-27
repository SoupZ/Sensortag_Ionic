import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KnownDevicesPage } from './known-devices';

@NgModule({
  declarations: [
    KnownDevicesPage,
  ],
  imports: [
    IonicPageModule.forChild(KnownDevicesPage),
  ],
})
export class KnownDevicesPageModule {}
