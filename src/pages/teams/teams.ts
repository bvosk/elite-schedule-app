import { EliteApi } from './../../shared/elite-api.service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TeamHomePage } from './../team-home/team-home';

@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html'
})
export class TeamsPage {

  teams = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public eliteApi: EliteApi) {}

  itemTapped($event, team) {
    this.navCtrl.push(TeamHomePage, team);
  }

  ionViewDidLoad() {
    let selectedTournament = this.navParams.data;

    this.eliteApi.getTournamentData(selectedTournament.id).subscribe(data => {
        this.teams = data.teams;
      });
  }
}
