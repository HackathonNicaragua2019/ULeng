import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-num14',
  templateUrl: './num14.page.html',
  styleUrls: ['./num14.page.scss'],
})
export class Num14Page {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-numeros"]);
  }

  siguiente(){
    this.router.navigate(["/num15"]);
  }

  anterior(){
    this.router.navigate(["/num13"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }
}
