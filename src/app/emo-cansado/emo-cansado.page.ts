import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-emo-cansado',
  templateUrl: './emo-cansado.page.html',
  styleUrls: ['./emo-cansado.page.scss'],
})
export class EmoCansadoPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-emociones"]);
  }

  siguiente(){
    this.router.navigate(["/emo-confundido"]);
  }

  anterior(){
    this.router.navigate(["/emo-amistoso"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
