import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dep-chinandega',
  templateUrl: './dep-chinandega.page.html',
  styleUrls: ['./dep-chinandega.page.scss'],
})
export class DepChinandegaPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-departamentos"]);
  }

  siguiente(){
    this.router.navigate(["/dep-chontales"]);
  }

  anterior(){
    this.router.navigate(["/dep-carazo"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
