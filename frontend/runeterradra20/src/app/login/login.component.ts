import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  agnForm: NgForm;
  constructor(private authenticationService: LoginService) { }
  private cards: any[];

  ngOnInit(): void {
    this.getCardImageURL();
    console.log(this.cards);
  }

  login(email: string, password: string): void {
    this.authenticationService.login(email, password).subscribe(
      error => {
        console.log(error);
      },
      () => {
        console.log("logged");
      }
    );
  }

 getCardImageURL(){
   this.authenticationService.getCardImages().map(
      (image) => {
        this.cards.push(image);
      }
    );  
  }
}
