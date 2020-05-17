import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../Game';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games;
  countPlays;
  playStyle;
  constructor(private gameService: GameService, private router: Router) {

  }

  ngOnInit(): void {
    this.getGames();
  }

  getGames(){
    //this.gameService.getGames().subscribe(games => this.games = games);
     this.gameService.getGames().subscribe((datos:any) =>{
      this.games = datos._embedded.games;
      for(let n = 0;n<this.games.length;n++){
        let cardFound = false;
        let vargame:any = Object.entries(this.games[n].Plays);
        this.games[n].playsCount = vargame.length;
        for(let i = 0;i<vargame.length;i++){
          if(cardFound){
            console.log(this.games[n].backgroundImage);
            break;
          }
          for(let j = 0;j < vargame[i].length;j++){
            if(cardFound) break;
            let jugada:any = vargame[i][j];
            for(let k = 0;k< jugada.length;k++){
              if(cardFound) break;
              if(jugada[k]["CardCode"]!==undefined && jugada[k]["CardCode"]!=="face"){
                if(jugada[k]["LocalPlayer"]=='true'){
                  let sub = this.gameService.getCardByCode(jugada[k]["CardCode"]).subscribe((datosCard:any) =>{
                    if(cardFound){sub.unsubscribe()}
                    else{
                      if(datosCard.supertype == "Champion"){
                        this.games[n].style = {background: 'url('+datosCard.assets[0].fullAbsolutePath+')', 'background-size': 'contain', 'background-repeat': 'no-repeat'};
                        cardFound = true;
                    } 
                    }
                  });
                }
              }
              
            }
            
          }
          
        }
      }
      console.log(Object.entries(this.games[0].Plays).length);
    });
  }

  gameDetail(entrada:any){
    let address:any = entrada._links.self.href.split("/");
    this.router.navigate(["/games/game/" + address[address.length-1]]);
  }
  textualdate(date){
    let shownDate = new Date(date);
    return shownDate.toUTCString()
  }

 /*  getBackgroundImage(entrada){
    let imgs = this.gameService.getCardBackground(entrada);
    let listadoCartas = this.gameService.getCards();
    let img_local,img_vs;
    listadoCartas.subscribe((datos:any) => {
      for(let n = 0;n<datos.length;n++){
        if(datos[n].cardCode == imgs[0].CardCode){
          img_local = datos[n].assets[0].fullAbsolutePath;
        }

        if(datos[n].cardCode == imgs[1].CardCode){
          img_vs = datos[n].assets[0].fullAbsolutePath;
        }

        if(img_local !== undefined && img_vs !== undefined){
          entrada.img_local=img_local;
          entrada.img_vs= img_vs;
          console.log(entrada.img_local,entrada.img_vs);
          break;
        }
      }
    });
    return img_local;
  } */
}
