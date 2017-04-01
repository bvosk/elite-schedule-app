import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { StandingsPage } from './../standings/standings';
import { TeamDetailPage } from './../team-detail/team-detail';

@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html'
})
export class TeamHomePage {
  team: any;
  teamDetailTab = TeamDetailPage;
  standingsTab = StandingsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = this.navParams.data;
  }

}
