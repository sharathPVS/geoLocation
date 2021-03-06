import { Component, OnInit } from '@angular/core';
import { Sim } from '@ionic-native/sim/ngx';

@Component({
  selector: 'app-sim-data',
  templateUrl: './sim-data.page.html',
  styleUrls: ['./sim-data.page.scss'],
})
export class SimDataPage implements OnInit {

 ngOnInit() {
  	alert('inated');
  }
  public simInfo: any;
  public cards: any;
  constructor( private sim: Sim) {}
 
  async getSimData() {
    try {
      let simPermission = await this.sim.requestReadPermission();
      if (simPermission == "OK") {
        let simData = await this.sim.getSimInfo();
        this.simInfo = simData;
        this.cards = simData.cards;
        console.log(simData);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
