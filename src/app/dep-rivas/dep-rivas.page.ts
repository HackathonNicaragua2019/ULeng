import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dep-rivas',
  templateUrl: './dep-rivas.page.html',
  styleUrls: ['./dep-rivas.page.scss'],
})
export class DepRivasPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-departamentos"]);
  }

  anterior(){
    this.router.navigate(["/dep-riojuan"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
