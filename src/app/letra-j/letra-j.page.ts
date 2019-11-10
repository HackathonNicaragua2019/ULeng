import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-letra-j',
  templateUrl: './letra-j.page.html',
  styleUrls: ['./letra-j.page.scss'],
})
export class LetraJPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-abecedario"]);
  }

  siguiente(){
    this.router.navigate(["/letra-k"]);
  }

  anterior(){
    this.router.navigate(["/letra-i"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
