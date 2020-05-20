import { Component, OnInit,EventEmitter, Output, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-replay-controlls',
  templateUrl: './replay-controlls.component.html',
  styleUrls: ['./replay-controlls.component.css']
})
export class ReplayControllsComponent implements OnInit, OnChanges {
  mensaje:string;

  @Output() propagar = new EventEmitter<String>();

  constructor() { }


  ngOnInit(): void {
  }

  ngOnChanges():void{


  }

  /*
  onPropagar(){
    this.propagar.emit(this.mensaje);
  }
  */
  back(){
    this.mensaje = "back";
    this.propagar.emit(this.mensaje);
  }

  play(){
    this.mensaje = "play";
    this.propagar.emit(this.mensaje);
  }

  pause(){
    this.mensaje = "pause";
    this.propagar.emit(this.mensaje);
  }

  forward(){
    this.mensaje = "forward";
    this.propagar.emit(this.mensaje);
  }
}
