import { EliteApi } from './../../shared/elite-api.service';
import { TeamsPage } from './../teams/teams';
import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

/*
  Generated class for the Tournaments page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html'
})
export class TournamentsPage {

  tournaments: any;

  constructor(private navCtrl: NavController,
              private eliteApi: EliteApi,
              private loadingController: LoadingController) {}

  itemTapped($event, tournament) {
    this.navCtrl.push(TeamsPage,tournament);
  }

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'Getting tournaments...',
      // spinner: 'dots'
    });

    loader.present().then(() => {
      this.eliteApi.getTournaments().then(data => {
        this.tournaments = data});
        loader.dismiss();
    });
  }

}
