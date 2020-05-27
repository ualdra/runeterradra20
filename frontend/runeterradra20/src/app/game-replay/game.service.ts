import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  private gamesApiUrl = 'http://apis.manelme.com/replay/games';
  private cardsApiUrl = 'http://apis.manelme.com/data/cards';

  constructor(private http: HttpClient) { }

  getGames(){
    return this.http.get(this.gamesApiUrl);
  }

  getCards(){
    return this.http.get(this.cardsApiUrl);
  }

  getGameById(id){
    return this.http.get(this.gamesApiUrl+"/"+id);
  }

  getCardByCode(cardCode){
    return this.http.get(this.cardsApiUrl+"/"+cardCode);
  }

  getCardBackground(game):any{
      let im_local,im_vs;
      let is_local = false;
      let is_vs = false;
      let vargame = Object.entries(game.Plays);
      for(let i = 0;i<vargame.length;i++){
        for(let j = 0;j < vargame[i].length;j++){
          let jugada:any = vargame[i][j];
          for(let k = 0;k< jugada.length;k++){
            if(jugada[k]["CardCode"]!==undefined && jugada[k]["CardCode"]!=="face"){
              if( jugada[k]["LocalPlayer"]=='true' && is_local==false){
                im_local = jugada[k];
                is_local = true;
              }
              if( jugada[k]["LocalPlayer"]=='false' && is_vs==false){
                im_vs = jugada[k];
                is_vs = true;
              }
              if(is_local && is_vs){
                break;
              }
            }
          }
        }
      }
      return [im_local, im_vs];
      let img_local,img_vs;
    //console.log(im_local,im_vs);
    /*
    this.getCards().subscribe((datos:any) =>{

        for(let n = 0;n<datos.length;n++){
          if(datos[n].cardCode == im_local.CardCode){
            img_local = datos[n].assets[0].fullAbsolutePath;
          }

          if(datos[n].cardCode == im_vs.CardCode){
            img_vs = datos[n].assets[0].fullAbsolutePath;
          }

          if(img_local !== undefined && img_vs !== undefined){


          }
        }
    })
    */

  }
}
