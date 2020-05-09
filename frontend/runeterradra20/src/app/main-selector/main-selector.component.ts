import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-main-selector',
  templateUrl: './main-selector.component.html',
  styleUrls: ['./main-selector.component.css']
})
export class MainSelectorComponent implements OnInit {

  constructor(private authenticationService: LoginService) { }
  cards: any[] = [];

  ngOnInit(): void {
    this.getCards(); 
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
    var div = document.querySelector('.selector-image') as HTMLElement;
    div.style.backgroundImage = 'url(' + this.cards[index].assets[0].fullAbsolutePath + ')';
  }

}
