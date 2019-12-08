import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-col-azul',
  templateUrl: './col-azul.page.html',
  styleUrls: ['./col-azul.page.scss'],
})
export class ColAzulPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-colores"]);
  }

  siguiente(){
    this.router.navigate(["/col-blanco"]);
  }

  anterior(){
    this.router.navigate(["/col-amarillo"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
