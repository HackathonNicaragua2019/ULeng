import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-col-blanco',
  templateUrl: './col-blanco.page.html',
  styleUrls: ['./col-blanco.page.scss'],
})
export class ColBlancoPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-colores"]);
  }

  siguiente(){
    this.router.navigate(["/col-celeste"]);
  }

  anterior(){
    this.router.navigate(["/col-azul"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
