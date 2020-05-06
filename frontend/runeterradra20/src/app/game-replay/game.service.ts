import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private gamesApiUrl = 'http://apis.manelme.com/replay/games';

  constructor(private http: HttpClient) { }

  getGames(): Observable<any> {
    return this.http.get<any>(this.gamesApiUrl);
  }
}
