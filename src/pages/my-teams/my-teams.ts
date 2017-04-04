import { UserSettings } from './../../shared/user-settings.service';
import { TeamHomePage } from './../team-home/team-home';
import { EliteApi } from './../../shared/elite-api.service';
import { TournamentsPage } from './../tournaments/tournaments';
import { NavController, LoadingController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'my-teams.html'
})
export class MyTeamsPage {
  favorites = [];

  constructor(private navCtrl: NavController,
              private loadingController: LoadingController,
              private eliteApi: EliteApi,
              private userSettings: UserSettings) {}

  ionViewDidEnter() {
    this.favorites = this.userSettings.getAllFavorites();
  }

  favoriteTapped($event, favorite) {
    let loader = this.loadingController.create({
      content: 'Getting data...',
      dismissOnPageChange: true
    });
    loader.present();
    this.eliteApi.getTournamentData(favorite.tournamentId)
      .subscribe(t => this.navCtrl.push(TeamHomePage, favorite.team))
  }

  goToTournaments() {
    this.navCtrl.push(TournamentsPage);
  }
}