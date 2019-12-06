import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dep-granada',
  templateUrl: './dep-granada.page.html',
  styleUrls: ['./dep-granada.page.scss'],
})
export class DepGranadaPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-departamentos"]);
  }

  siguiente(){
    this.router.navigate(["/dep-jinotega"]);
  }

  anterior(){
    this.router.navigate(["/dep-esteli"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
