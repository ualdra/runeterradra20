import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../Game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games;
  countPlays;
  constructor(private gameService: GameService) { 

  }

  ngOnInit(): void {
    console.log("lol");
    this.getGames();
    
   
  }
  
  getGames():void{
    //this.gameService.getGames().subscribe(games => this.games = games);
    this.gameService.getGames().subscribe((datos:any) => {
      console.log(datos._embedded.games)
      this.games = datos._embedded.games
    });
 
  }

}
