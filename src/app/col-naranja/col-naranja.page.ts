import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-col-naranja',
  templateUrl: './col-naranja.page.html',
  styleUrls: ['./col-naranja.page.scss'],
})
export class ColNaranjaPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-colores"]);
  }

  siguiente(){
    this.router.navigate(["/col-negro"]);
  }

  anterior(){
    this.router.navigate(["/col-morado"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}