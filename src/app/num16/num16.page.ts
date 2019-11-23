import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-num16',
  templateUrl: './num16.page.html',
  styleUrls: ['./num16.page.scss'],
})
export class Num16Page {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-numeros"]);
  }

  siguiente(){
    this.router.navigate(["/num17"]);
  }

  anterior(){
    this.router.navigate(["/num15"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }
}
