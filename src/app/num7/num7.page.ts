import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-num7',
  templateUrl: './num7.page.html',
  styleUrls: ['./num7.page.scss'],
})
export class Num7Page {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-numeros"]);
  }

  siguiente(){
    this.router.navigate(["/num8"]);
  }

  anterior(){
    this.router.navigate(["/num6"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }
}