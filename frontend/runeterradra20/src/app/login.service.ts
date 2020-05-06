import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'localhost:8080/api'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private token: any;
  private isLoggedIn: any = false
  private localStorage: LocalStorage;

  constructor(
    private http: HttpClient) { }

  signIn(username: string, password: string, email: string): Observable<any> {
    const url = `${this.apiUrl}/signin`;
    let user = {
      'username': username,
      'password': password,
      'email': email
    }
    return this.http.post<any>(url, user, this.httpOptions)
    .pipe(
      tap( token => {
        this.localStorage.setItem('token', token)
        .pipe(
          tap( () => {
              console.log('Token Stored');
              error => console.error('Error storing item', error)
              this.token = token;
              this.isLoggedIn = true;
            }
          )
        );
        return token;
      }),
    );
  }

  login(email: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/login`;
    let user = {
      'password': password,
      'email': email
    }
    return this.http.post<any>(url, user, this.httpOptions).pipe(
      tap( token => {
        this.localStorage.setItem('token', token)
        .pipe(
          tap( () => {
              console.log('Token Stored');
              error => console.error('Error storing item', error)
              this.token = token;
              this.isLoggedIn = true;
            }
          )
        );
        return token;
      }),
    );
  }

  getToken(){
    return this.localStorage.getItem('token').pipe(
      tap(
        data => {
          this.token = data;
          if(this.token != null){
            this.isLoggedIn = true;
          } else{
            this.isLoggedIn = false;
          }
        },
        error => {
          this.token;
          this.isLoggedIn = false;
        }
      )
    )
  }

}
