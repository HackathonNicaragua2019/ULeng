import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-col-morado',
  templateUrl: './col-morado.page.html',
  styleUrls: ['./col-morado.page.scss'],
})
export class ColMoradoPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-colores"]);
  }

  siguiente(){
    this.router.navigate(["/col-naranja"]);
  }

  anterior(){
    this.router.navigate(["/col-celeste"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
