import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameContainerComponent } from './game-replay/game-container/game-container.component';


const routes: Routes = [
  {path: 'games', component: GameContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
