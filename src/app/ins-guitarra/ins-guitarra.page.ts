import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-ins-guitarra',
  templateUrl: './ins-guitarra.page.html',
  styleUrls: ['./ins-guitarra.page.scss'],
})
export class InsGuitarraPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-instrumentos"]);
  }

  siguiente(){
    this.router.navigate(["/ins-piano"]);
  }

  anterior(){
    this.router.navigate(["/ins-flauta"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}

