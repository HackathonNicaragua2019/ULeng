import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emo-llorando',
  templateUrl: './emo-llorando.page.html',
  styleUrls: ['./emo-llorando.page.scss'],
})
export class EmoLlorandoPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-emociones"]);
  }

  siguiente(){
    this.router.navigate(["/emo-triste"]);
  }

  anterior(){
    this.router.navigate(["/emo-feliz"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
