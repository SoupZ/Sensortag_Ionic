import { KnownDevicesPage } from './../known-devices/known-devices';
import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { SensortagPage } from '../Sensortag/sensortag';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SensortagPage;
  tab3Root= KnownDevicesPage;

  constructor() {

  }
}
