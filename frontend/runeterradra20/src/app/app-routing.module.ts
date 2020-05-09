import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameListComponent } from './game-replay/game-list/game-list.component';
import { GameContainerComponent } from './game-replay/game-container/game-container.component';


const routes: Routes = [
  { path: '', redirectTo: '/games', pathMatch: 'full' },
  {path: 'games', loadChildren: () => import('./game-replay/game-replay.module').then(m => m.GameReplayModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
