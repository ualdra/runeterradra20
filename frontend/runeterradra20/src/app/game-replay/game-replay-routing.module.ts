import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameListComponent } from './game-list/game-list.component';
import { GameContainerComponent } from './game-container/game-container.component';


const routes: Routes = [
  { path: '', component: GameListComponent },
<<<<<<< HEAD
  { path: 'game', component: GameContainerComponent },
=======
  { path: 'game/:id', component: GameContainerComponent },
>>>>>>> 93dfa42f29ba100778f01c1e08d432df553c5538
  { path: 'games', component: GameListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameReplayRoutingModule { }
