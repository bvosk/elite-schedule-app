import { TournamentsPage } from './../tournaments/tournaments';
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'my-teams.html'
})
export class MyTeamsPage {

  constructor(private _nav: NavController){}

  goToTournaments() {
    this._nav.push(TournamentsPage);
  }
}