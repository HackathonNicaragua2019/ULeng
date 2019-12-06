import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dep-nuevaseg',
  templateUrl: './dep-nuevaseg.page.html',
  styleUrls: ['./dep-nuevaseg.page.scss'],
})
export class DepNuevasegPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-departamentos"]);
  }

  siguiente(){
    this.router.navigate(["/dep-raccn"]);
  }

  anterior(){
    this.router.navigate(["/dep-matagalpa"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
