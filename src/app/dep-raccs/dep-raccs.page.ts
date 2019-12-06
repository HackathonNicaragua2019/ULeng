import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dep-raccs',
  templateUrl: './dep-raccs.page.html',
  styleUrls: ['./dep-raccs.page.scss'],
})
export class DepRaccsPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-departamentos"]);
  }

  siguiente(){
    this.router.navigate(["/dep-riojuan"]);
  }

  anterior(){
    this.router.navigate(["/dep-raccn"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
