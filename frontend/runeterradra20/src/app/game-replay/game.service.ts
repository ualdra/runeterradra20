import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Game } from './Game';
@Injectable({
  providedIn: 'root'
})
export class GameService {

  private gamesApiUrl = 'http://apis.manelme.com/replay/games';

  constructor(private http: HttpClient) { }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.gamesApiUrl);
  }
}
