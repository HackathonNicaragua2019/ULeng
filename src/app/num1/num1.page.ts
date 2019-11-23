import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-num1',
  templateUrl: './num1.page.html',
  styleUrls: ['./num1.page.scss'],
})
export class Num1Page {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-numeros"]);
  }

  siguiente(){
    this.router.navigate(["/num2"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }
}