import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authenticationService: LoginService) { }

  ngOnInit(): void {
  }

  signIn(username: string, email: string, password: string) {
    this.authenticationService.signIn(username, password, email).subscribe(

    );
  }

}
