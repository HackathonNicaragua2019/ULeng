import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-col-rosado',
  templateUrl: './col-rosado.page.html',
  styleUrls: ['./col-rosado.page.scss'],
})
export class ColRosadoPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-colores"]);
  }

  siguiente(){
    this.router.navigate(["/col-verde"]);
  }

  anterior(){
    this.router.navigate(["/col-rojo"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
