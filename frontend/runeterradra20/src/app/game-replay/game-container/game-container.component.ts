import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.css']
})
export class GameContainerComponent implements OnInit {

  game;
  lastPlay;
  currentPlay = 0;
  playGame: any;

  constructor(private gameService: GameService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.getData();
  }

  async getData(){
    await this.gameService.getGameById(this.activatedRoute.snapshot.paramMap.get('id')).subscribe((data: any) =>{
      this.game = data;
      this.lastPlay=Object.entries(this.game.Plays).length;
    });
  }

  patras(){
    this.currentPlay--;
  }

  palante(){
    this.currentPlay++;
  }
  play(){
    this.playGame = setInterval(()=>{
      if(this.currentPlay<this.lastPlay) this.currentPlay++;
      else clearInterval(this.playGame);

    },100)
  }
  pause(){
    clearInterval(this.playGame);
  }

}
