import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dep-matagalpa',
  templateUrl: './dep-matagalpa.page.html',
  styleUrls: ['./dep-matagalpa.page.scss'],
})
export class DepMatagalpaPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-departamentos"]);
  }

  siguiente(){
    this.router.navigate(["/dep-nuevaseg"]);
  }

  anterior(){
    this.router.navigate(["/dep-masaya"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
