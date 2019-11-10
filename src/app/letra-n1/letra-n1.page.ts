import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-letra-n1',
  templateUrl: './letra-n1.page.html',
  styleUrls: ['./letra-n1.page.scss'],
})
export class LetraN1Page {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-abecedario"]);
  }

  siguiente(){
    this.router.navigate(["/letra-o"]);
  }

  anterior(){
    this.router.navigate(["/letra-n"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
