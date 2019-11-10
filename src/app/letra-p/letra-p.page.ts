import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-letra-p',
  templateUrl: './letra-p.page.html',
  styleUrls: ['./letra-p.page.scss'],
})
export class LetraPPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-abecedario"]);
  }

  siguiente(){
    this.router.navigate(["/letra-q"]);
  }

  anterior(){
    this.router.navigate(["/letra-o"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
