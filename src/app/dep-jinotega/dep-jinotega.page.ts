import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dep-jinotega',
  templateUrl: './dep-jinotega.page.html',
  styleUrls: ['./dep-jinotega.page.scss'],
})
export class DepJinotegaPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-departamentos"]);
  }

  siguiente(){
    this.router.navigate(["/dep-leon"]);
  }

  anterior(){
    this.router.navigate(["/dep-granada"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
