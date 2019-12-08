import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-col-negro',
  templateUrl: './col-negro.page.html',
  styleUrls: ['./col-negro.page.scss'],
})
export class ColNegroPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-colores"]);
  }

  siguiente(){
    this.router.navigate(["/col-rojo"]);
  }

  anterior(){
    this.router.navigate(["/col-naranja"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
