import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { MyTeamsPage } from './../pages/my-teams/my-teams';
import { TeamDetailPage } from './../pages/team-detail/team-detail';
import { TournamentsPage } from './../pages/tournaments/tournaments';
import { GamePage } from './../pages/game/game';
import { TeamsPage } from './../pages/teams/teams';
import { StandingsPage } from './../pages/standings/standings';
import { TeamHomePage } from './../pages/team-home/team-home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    TeamsPage,
    TeamDetailPage,
    GamePage,
    TournamentsPage,
    TeamHomePage,
    StandingsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    TeamsPage,
    TeamDetailPage,
    GamePage,
    TournamentsPage,
    TeamHomePage,
    StandingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
