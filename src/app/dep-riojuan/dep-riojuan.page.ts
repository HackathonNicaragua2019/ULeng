import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dep-riojuan',
  templateUrl: './dep-riojuan.page.html',
  styleUrls: ['./dep-riojuan.page.scss'],
})
export class DepRiojuanPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-departamentos"]);
  }

  siguiente(){
    this.router.navigate(["/dep-rivas"]);
  }

  anterior(){
    this.router.navigate(["/dep-raccs"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}