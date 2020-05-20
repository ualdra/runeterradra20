import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  agnForm: NgForm;
  cards: any[] = [];

  constructor(
    private authenticationService: LoginService, 
    private route: Router ) { }

  ngOnInit(): void {
    this.getCards(); 
  }

  login(email: string, password: string): void {
    this.authenticationService.login(email, password).subscribe(
      (next: any) => {
        console.log(next);
        console.log("is logged in")
        localStorage.setItem("token", next.token);
        this.authenticationService.deleteUser(next)
        this.route.navigate(['selector']);
      },
      error => {
        console.log(error);
      }
    );
  }

  getCards() {
    this.authenticationService.getCards().then((cards: any) => {
      cards.map((card) => {
        if (card.rarity == "Champion")
          this.cards.push(card);
      })
    }).then(() => {
      
      this.loadBackgroundImage(Math.floor((Math.random() * 22) + 1));
    });
  }

  loadBackgroundImage(index: number) {
    var div = document.querySelector('.login-image') as HTMLElement;
    div.style.backgroundImage = 'url(' + this.cards[index].assets[0].fullAbsolutePath + ')';
  }
  
}
