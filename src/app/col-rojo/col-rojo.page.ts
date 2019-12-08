import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-col-rojo',
  templateUrl: './col-rojo.page.html',
  styleUrls: ['./col-rojo.page.scss'],
})
export class ColRojoPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-colores"]);
  }

  siguiente(){
    this.router.navigate(["/col-rosado"]);
  }

  anterior(){
    this.router.navigate(["/col-negro"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
