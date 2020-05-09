import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
      error => {
        console.log(error);
      },
      () => {
        this.route.navigate(['selector']);
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
