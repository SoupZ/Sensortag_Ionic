import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SensorTagDataPage } from './sensor-tag-data';

@NgModule({
  declarations: [
    SensorTagDataPage,
  ],
  imports: [
    IonicPageModule.forChild(SensorTagDataPage),
  ],
})
export class SensorTagDataPageModule {}
