import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dep-madriz',
  templateUrl: './dep-madriz.page.html',
  styleUrls: ['./dep-madriz.page.scss'],
})
export class DepMadrizPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-departamentos"]);
  }

  siguiente(){
    this.router.navigate(["/dep-managua"]);
  }

  anterior(){
    this.router.navigate(["/dep-leon"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
