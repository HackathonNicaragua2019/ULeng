import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dep-raccn',
  templateUrl: './dep-raccn.page.html',
  styleUrls: ['./dep-raccn.page.scss'],
})
export class DepRaccnPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-departamentos"]);
  }

  siguiente(){
    this.router.navigate(["/dep-raccs"]);
  }

  anterior(){
    this.router.navigate(["/dep-nuevaseg"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
