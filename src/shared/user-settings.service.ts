import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class UserSettings {
  constructor(private storage: Storage) {
  }

  favoriteTeam(team, tournamentId, tournamentName) {
    let item = { team: team, tournamentId: tournamentId, tournamentName: tournamentName };
    this.storage.set(team.id.toString(), JSON.stringify(item));
  }

  unfavoriteTeam(team) {
    this.storage.remove(team.id.toString());
  }

  isFavoriteTeam(teamId) {
    return this.storage.get(teamId.toString()).then(value => value ? true : false);
  }

  getAllFavorites() {
    let favorites = [];
    this.storage.forEach((value, key) => {
      favorites.push(JSON.parse(value));
    });
    return favorites;
  }
}