import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-card-in-game',
  templateUrl: './card-in-game.component.html',
  styleUrls: ['./card-in-game.component.css']
})
export class CardInGameComponent implements OnInit, OnChanges {

  @Input() card: any;
  @Input() screenW: any;
  @Input() screenH: any;
  navW: any;
  navH: any;

  cardStyle: any;

  constructor() { }

  ngOnInit(): void {
    /*let cardCSS:any = document.querySelector(".card-position");
    cardCSS.style.top = this.card.TopLeftY+"px";
    cardCSS.style.left = this.card.TopLeftX+"px";*/
  }

  ngOnChanges(): void {
    this.navW = window.innerWidth;
    this.navH = window.innerHeight;
    //console.log(this.navW+" "+this.navH);
    if(this.card.CardCode!="face")
      this.cardStyle = {
        bottom: ((this.card.TopLeftY*this.navH)/this.screenH)-((this.card.Height*this.navW)/this.screenW)+'px', 
        left: (this.card.TopLeftX*this.navW)/this.screenW+'px', 
        height: (this.card.Height*this.navW)/this.screenW+'px', 
        width: (this.card.Width*this.navW)/this.screenW+'px', 
        background: 'url(http://dd.b.pvp.net/1_0_0/set1/en_us/img/cards/' + this.card.CardCode + '.png)', 
        'background-size': 'contain', 'background-repeat':'no-repeat'}
    else 
      this.cardStyle = {
        bottom: ((this.card.TopLeftY*this.navH)/this.screenH)-((this.card.Height*this.navW)/this.screenW)+'px', 
        left: (this.card.TopLeftX*this.navW)/this.screenW+'px', 
        height: (this.card.Height*this.navW)/this.screenW+'px', 
        width: (this.card.Width*this.navW)/this.screenW+'px', 
        background: 'url(https://vignette.wikia.nocookie.net/leagueoflegends/images/7/7e/LoR_Summoner%27s_Rift_Card_Back.png)', 
        'background-size': 'contain', 'background-repeat':'no-repeat'}
  }

  /*"CardID" : "1464064825",
    "CardCode" : "face",
    "TopLeftX" : "179",
    "TopLeftY" : "481",
    "Width" : "117",
    "Height" : "117",
    "LocalPlayer" : "true"
*/
}

/* 1.508 */
