import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-letra-i',
  templateUrl: './letra-i.page.html',
  styleUrls: ['./letra-i.page.scss'],
})
export class LetraIPage{

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-abecedario"]);
  }

  siguiente(){
    this.router.navigate(["/letra-j"]);
  }

  anterior(){
    this.router.navigate(["/letra-h"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
