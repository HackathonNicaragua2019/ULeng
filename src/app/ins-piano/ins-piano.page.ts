import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-ins-piano',
  templateUrl: './ins-piano.page.html',
  styleUrls: ['./ins-piano.page.scss'],
})
export class InsPianoPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-instrumentos"]);
  }

  siguiente(){
    this.router.navigate(["/ins-violin"]);
  }

  anterior(){
    this.router.navigate(["/ins-guitarra"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}