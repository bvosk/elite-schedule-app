import { TeamHomePage } from './../team-home/team-home';
import { EliteApi } from './../../shared/elite-api.service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Game page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {
  game: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private eliteApi: EliteApi) {}

  ionViewDidLoad() {
    this.game = this.navParams.data;
  }
  
  teamTapped(teamId) {
    let tournamentData = this.eliteApi.getCurrentTournament();
    let team = tournamentData.teams.find(team => team.id === teamId);

    this.navCtrl.push(TeamHomePage, team);
  }

}
