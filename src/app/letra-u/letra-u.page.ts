import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-letra-u',
  templateUrl: './letra-u.page.html',
  styleUrls: ['./letra-u.page.scss'],
})
export class LetraUPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-animales"]);
  }

  siguiente(){
    this.router.navigate(["/letra-v"]);
  }

  anterior(){
    this.router.navigate(["/letra-t"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
