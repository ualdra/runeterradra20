import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameListComponent } from './game-list/game-list.component';
import { GameContainerComponent } from './game-container/game-container.component';


const routes: Routes = [
  { path: '', component: GameContainerComponent },
  { path: 'game', component: GameContainerComponent },
  { path: 'games', component: GameListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameReplayRoutingModule { }