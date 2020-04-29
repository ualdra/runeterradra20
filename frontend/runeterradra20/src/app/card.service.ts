import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token',
  }),
};

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

  getCards() {
    return this.http.get('localhost:8080/api/cards');
  }
}
