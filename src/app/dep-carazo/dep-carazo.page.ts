import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dep-carazo',
  templateUrl: './dep-carazo.page.html',
  styleUrls: ['./dep-carazo.page.scss'],
})
export class DepCarazoPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-departamentos"]);
  }

  siguiente(){
    this.router.navigate(["/dep-chinandega"]);
  }

  anterior(){
    this.router.navigate(["/dep-boaco"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
