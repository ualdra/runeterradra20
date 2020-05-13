import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main-selector',
  templateUrl: './main-selector.component.html',
  styleUrls: ['./main-selector.component.css']
})
export class MainSelectorComponent implements OnInit {

  constructor(
    private authenticationService: LoginService,
    private route: Router) { }
  cards: any[] = [];
  user : any;

  ngOnInit(): void {
    if(localStorage.getItem("token") == null){
      this.route.navigate(['/login']);
    }
    else{
      this.authenticationService.getUserByToken(localStorage.getItem("token")).subscribe(
        (data : any) => {
          this.user = data;
          console.log(data);
        }
      );
      this.getCards();
    }
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

  addDescriptionCardSelector() {
    var description = document.querySelector('.text-description') as HTMLElement;
    description.style.display = 'block';
    description.innerHTML = '<h2 class="description-title">Consult Cards</h2><p>Click here to consult the available cards on the game and see the lastest cards added</p>';
    var title = document.querySelector('.description-title') as HTMLElement;
    title.style.color = 'orange';
  }

  addDescriptionDeckBuilder() {
    var description = document.querySelector('.text-description') as HTMLElement;
    description.style.display = 'block';
    description.innerHTML = '<h2 class="description-title">Deck Builder</h2><p>Create your own deck and make your own strategies to defeat your oponents</p>';
    var title = document.querySelector('.description-title') as HTMLElement;
    title.style.color = 'orange';
  }

  addDescriptionMatchReplay() {
    var description = document.querySelector('.text-description') as HTMLElement;
    description.style.display = 'block';
    description.innerHTML = '<h2 class="description-title">Match Replay</h2><p>Review your last matches to see your greatest moves and learn from your mistakes to improve even more</p>';
    var title = document.querySelector('.description-title') as HTMLElement;
    title.style.color = 'orange';
  }

  deleteDescription() {
    var description = document.querySelector('.text-description') as HTMLElement;
    description.style.display = 'none';
  }

  signOut(){
    localStorage.removeItem("token");
  }

}
