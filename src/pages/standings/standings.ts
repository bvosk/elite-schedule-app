import { EliteApi } from './../../shared/elite-api.service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import * as _ from 'lodash';

@Component({
  selector: 'page-standings',
  templateUrl: 'standings.html'
})
export class StandingsPage {
  standings: any[];
  allStandings: any[];
  team: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private eliteApi: EliteApi) {}

  ionViewDidLoad() {
    this.team = this.navParams.data;
    let tournamentData = this.eliteApi.getCurrentTournament();
    this.standings = tournamentData.standings;

    this.allStandings =
      _.chain(this.standings)
       .groupBy('division')
       .toPairs()
       .map(item => _.zipObject(['divisionName', 'divisionStandings'], item))
       .value();
  }

}
