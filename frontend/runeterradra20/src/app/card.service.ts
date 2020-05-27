import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Subject } from 'rxjs';
import { environment } from './../environments/environment';
import { LocalStorage } from '@ngx-pwa/local-storage';


/* const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',

    // Authorization: 'my-auth-token',
  }),
  mode: 'no-cors',
}; */





@Injectable({
  providedIn: 'any',
})
export class CardService {
  constructor(private http: HttpClient) {}

  /* options: {
    headers?: HttpHeaders | { [header: string]: string | string[] };
    observe?: 'body' | 'events' | 'response';
    params?: HttpParams | { [param: string]: string | string[] };
    reportProgress?: boolean;
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
    withCredentials?: boolean;
  }; */

  // Observable string sources

  private httpOptions = {
    headers: {
      Accept: '*/*',
    }
  };

  cards: any;

  private regionSelectedSource = new Subject<string>();
  private searchWordSource = new Subject<string>();

  // Observable string streams

  regionSelected$ = this.regionSelectedSource.asObservable();
  searchWord$ = this.searchWordSource.asObservable();

  // Service message commands
  setRegion(region: string) {
    this.regionSelectedSource.next(region);
  }

  setSearchWord(word: string) {
    this.searchWordSource.next(word);
  }

  getCards() {
    return this.http.get(environment.APIEndpoint + '/cards', this.httpOptions);   // para local quitar /data 
  }

  getRegions(): any {
    return this.http.get(environment.APIEndpoint + '/regions', this.httpOptions);
  }

  getRegion(region: string): any {
    console.log(region);
    return this.http.get(environment.APIEndpoint + '/regions/' + region, this.httpOptions);
  }
}
