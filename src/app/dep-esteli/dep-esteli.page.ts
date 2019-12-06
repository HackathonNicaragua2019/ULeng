import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dep-esteli',
  templateUrl: './dep-esteli.page.html',
  styleUrls: ['./dep-esteli.page.scss'],
})
export class DepEsteliPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-departamentos"]);
  }

  siguiente(){
    this.router.navigate(["/dep-granada"]);
  }

  anterior(){
    this.router.navigate(["/dep-chontales"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
