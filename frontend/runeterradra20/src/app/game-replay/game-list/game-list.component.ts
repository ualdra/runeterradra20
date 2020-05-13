import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../Game';
import { Router } from '@angular/router';
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

 async getGames(){
    //this.gameService.getGames().subscribe(games => this.games = games);
     await this.gameService.getGames().subscribe(async (datos:any) =>{
      console.log(datos._embedded.games)
      this.games = datos._embedded.games;
      for(let n = 0;n<this.games.length;n++){
        let cardFound = false;
        let vargame:any = Object.entries(this.games[n].Plays);
        this.games[n].playsCount = vargame.length;
        for(let i = 0;i<vargame.length;i++){
          for(let j = 0;j < vargame[i].length;j++){
            let jugada:any = vargame[i][j];
            for(let k = 0;k< jugada.length;k++){
              if(jugada[k]["CardCode"]!==undefined && jugada[k]["CardCode"]!=="face"){
                if(jugada[k]["LocalPlayer"]=='true'){
                  await this.gameService.getCardByCode(jugada[k]["CardCode"]).subscribe((datosCard:any) =>{
                    if(datosCard.supertype == "Champion"){
                      this.games[n].backgroundImage = datosCard.assets[0].fullAbsolutePath;
                      cardFound = true;
                    }
                  });
                }
              }
              if(cardFound) break;
            }
            if(cardFound) break;
          }
          if(cardFound){
            console.log(this.games[n].backgroundImage);
            break;
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

  getBackgroundImage(entrada){
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
  }
}
