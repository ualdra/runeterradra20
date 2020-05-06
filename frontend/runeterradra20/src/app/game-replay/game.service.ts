import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private gamesApiUrl = 'http://apis.manelme.com/replay/games';

  constructor(private http: HttpClient) { }

  getGames(){
    return this.http.get(this.gamesApiUrl);
  }
}
