import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-letra-h',
  templateUrl: './letra-h.page.html',
  styleUrls: ['./letra-h.page.scss'],
})
export class LetraHPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-abecedario"]);
  }

  siguiente(){
    this.router.navigate(["/letra-i"]);
  }

  anterior(){
    this.router.navigate(["/letra-g"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
