import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dep-chontales',
  templateUrl: './dep-chontales.page.html',
  styleUrls: ['./dep-chontales.page.scss'],
})
export class DepChontalesPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-departamentos"]);
  }

  siguiente(){
    this.router.navigate(["/dep-esteli"]);
  }

  anterior(){
    this.router.navigate(["/dep-chinandega"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
