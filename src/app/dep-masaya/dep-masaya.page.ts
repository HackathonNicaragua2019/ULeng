import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dep-masaya',
  templateUrl: './dep-masaya.page.html',
  styleUrls: ['./dep-masaya.page.scss'],
})
export class DepMasayaPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-departamentos"]);
  }

  siguiente(){
    this.router.navigate(["/dep-matagalpa"]);
  }

  anterior(){
    this.router.navigate(["/dep-managua"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
