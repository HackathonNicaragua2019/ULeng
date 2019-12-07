import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emo-confundido',
  templateUrl: './emo-confundido.page.html',
  styleUrls: ['./emo-confundido.page.scss'],
})
export class EmoConfundidoPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-emociones"]);
  }

  siguiente(){
    this.router.navigate(["/emo-conmocionado"]);
  }

  anterior(){
    this.router.navigate(["/emo-cansado"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
