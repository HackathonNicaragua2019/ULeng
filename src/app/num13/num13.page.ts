import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-num13',
  templateUrl: './num13.page.html',
  styleUrls: ['./num13.page.scss'],
})
export class Num13Page {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-numeros"]);
  }

  siguiente(){
    this.router.navigate(["/num14"]);
  }

  anterior(){
    this.router.navigate(["/num12"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }
}
