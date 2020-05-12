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
  currentPlay = 0;

  constructor(private gameService: GameService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.getData();
  }

  async getData(){
    await this.gameService.getGameById(this.activatedRoute.snapshot.paramMap.get('id')).subscribe((data: any) =>{
      this.game = data;
    });
  }

  patras(){
    this.currentPlay--;
  }

  palante(){
    this.currentPlay++;
  }

}
