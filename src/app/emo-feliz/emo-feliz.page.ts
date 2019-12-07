import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emo-feliz',
  templateUrl: './emo-feliz.page.html',
  styleUrls: ['./emo-feliz.page.scss'],
})
export class EmoFelizPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-emociones"]);
  }

  siguiente(){
    this.router.navigate(["/emo-llorando"]);
  }

  anterior(){
    this.router.navigate(["/emo-enojado"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}