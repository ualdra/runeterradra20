import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: LoginService) { }

  ngOnInit(): void {

  }

  login(email: string, password: string): void {
    this.authenticationService.login(email, password);
  }

  signIn(username: string, password: string, email: string): void {
    this.authenticationService.signIn(username, password, email);
  }

}
