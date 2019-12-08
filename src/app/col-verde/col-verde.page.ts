import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-col-verde',
  templateUrl: './col-verde.page.html',
  styleUrls: ['./col-verde.page.scss'],
})
export class ColVerdePage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-colores"]);
  }

  anterior(){
    this.router.navigate(["/col-rosado"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
