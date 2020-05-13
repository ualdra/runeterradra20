import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authenticationService: LoginService,
              private route: Router) { }

  ngOnInit(): void {

  }

  signIn(username: string, email: string, password: string) {
    this.authenticationService.signIn(username, password, email).subscribe(
      data => {
         this.authenticationService.login(email, password).subscribe(
          next => {
            this.route.navigate(['selector']);
          },
          error => {
            console.log(error);
          },
          () => {
            
          }
        )
      },
      error => {
        console.log(error);
      }
    );
  }

}
