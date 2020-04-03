import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-ins-flauta',
  templateUrl: './ins-flauta.page.html',
  styleUrls: ['./ins-flauta.page.scss'],
})
export class InsFlautaPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-instrumentos"]);
  }

  siguiente(){
    this.router.navigate(["/ins-guitarra"]);
  }

  anterior(){
    this.router.navigate(["/ins-acordeon"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
