import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ani-perro',
  templateUrl: './ani-perro.page.html',
  styleUrls: ['./ani-perro.page.scss'],
})
export class AniPerroPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-animales"]);
  }

  siguiente(){
    this.router.navigate(["/ani-vaca"]);
  }

  anterior(){
    this.router.navigate(["/ani-mono"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}