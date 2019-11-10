import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-letra-a',
  templateUrl: './letra-a.page.html',
  styleUrls: ['./letra-a.page.scss'],
})
export class LetraAPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/home"]);
  }

  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  siguiente(){
    this.router.navigate(["/letra-b"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}