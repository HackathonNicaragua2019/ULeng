import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-col-celeste',
  templateUrl: './col-celeste.page.html',
  styleUrls: ['./col-celeste.page.scss'],
})
export class ColCelestePage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-colores"]);
  }

  siguiente(){
    this.router.navigate(["/col-morado"]);
  }

  anterior(){
    this.router.navigate(["/col-blanco"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
