import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emo-conmocionado',
  templateUrl: './emo-conmocionado.page.html',
  styleUrls: ['./emo-conmocionado.page.scss'],
})
export class EmoConmocionadoPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-emociones"]);
  }

  siguiente(){
    this.router.navigate(["/emo-enamorado"]);
  }

  anterior(){
    this.router.navigate(["/emo-confundido"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
