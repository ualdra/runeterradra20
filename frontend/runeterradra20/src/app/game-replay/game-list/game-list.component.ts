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
  constructor(private gameService: GameService, private router: Router) {

  }

  ngOnInit(): void {
    console.log("lol");
    this.getGames();
  }

  getGames():void{
    //this.gameService.getGames().subscribe(games => this.games = games);
    this.gameService.getGames().subscribe((datos:any) => {
      console.log(datos._embedded.games)
      this.games = datos._embedded.games;
      for(let i = 0;i<this.games.length;i++){
        //this.games[i].backgroundImage = this.getBackgroundImage(this.games[i]);
        this.games[i].playsCount = Object.entries(this.games[i].Plays).length;
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
