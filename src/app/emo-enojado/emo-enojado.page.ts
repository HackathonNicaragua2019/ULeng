import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emo-enojado',
  templateUrl: './emo-enojado.page.html',
  styleUrls: ['./emo-enojado.page.scss'],
})
export class EmoEnojadoPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-emociones"]);
  }

  siguiente(){
    this.router.navigate(["/emo-feliz"]);
  }

  anterior(){
    this.router.navigate(["/emo-enamorado"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
