import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ani-gato',
  templateUrl: './ani-gato.page.html',
  styleUrls: ['./ani-gato.page.scss'],
})
export class AniGatoPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-animales"]);
  }

  siguiente(){
    this.router.navigate(["/ani-mono"]);
  }

  anterior(){
    this.router.navigate(["/ani-gallo"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}