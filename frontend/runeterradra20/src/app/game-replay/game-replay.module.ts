import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameContainerComponent } from './game-container/game-container.component';
import { ReplayControllsComponent } from './replay-controlls/replay-controlls.component';
import { CardInGameComponent } from './card-in-game/card-in-game.component';
import { GameListComponent } from './game-list/game-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { GameService } from './game.service';
import { GameReplayRoutingModule  } from './game-replay-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [GameContainerComponent,
     ReplayControllsComponent, 
     CardInGameComponent,
    GameListComponent],
  imports: [
    GameReplayRoutingModule,
    HttpClientModule,
    CommonModule,
    RouterModule
  ],
  providers:[GameService
  ]
})
export class GameReplayModule { }
