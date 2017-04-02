import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class EliteApi {
  private baseUrl: string = 'https://elite-schedule-app-1e9ab.firebaseio.com/';

  constructor(private http: Http) { }

  getTournaments () {
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/tournaments.json`)
        .subscribe(response => resolve(response.json()))
    })
  }
}