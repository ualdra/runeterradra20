import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://apis.manelme.com/auth';
  private apiCards = 'http://apis.manelme.com/data/cards';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private token: any;
  private isLoggedIn: any = false
  private localStorage: LocalStorage;

  constructor(
    private http: HttpClient) { }

  signIn(username: string, password: string, email: string) {
    const url = `${this.apiUrl}/signin`;
    let user = {
      'username': username,
      'password': password,
      'email': email
    }
    return this.http.post(url, user, this.httpOptions);
  }

  login(email: string, password: string) {
    const url = `${this.apiUrl}/login`;
    let user = {
      'password': password,
      'email': email
    }
    return this.http.post(url, user, this.httpOptions);
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

  getUserByToken(token: any){
    const url = `${this.apiUrl}/checktoken`;
    console.log(token);
    return this.http.post(url, {"token" : token}, this.httpOptions);
  }

  async getCards(){
    return await this.http.get(this.apiCards).toPromise();
  }

  deleteUser(user: any){
    return this.http.delete(this.apiUrl + '/auth/users/2');
  }

  isLogged(){
    return this.isLoggedIn;
  }
}
