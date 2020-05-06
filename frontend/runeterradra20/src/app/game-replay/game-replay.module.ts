import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameContainerComponent } from './game-container/game-container.component';
import { ReplayControllsComponent } from './replay-controlls/replay-controlls.component';
import { CardInGameComponent } from './card-in-game/card-in-game.component';


@NgModule({
  declarations: [GameContainerComponent, ReplayControllsComponent, CardInGameComponent],
  imports: [
    CommonModule
  ]
})
export class GameReplayModule { }
