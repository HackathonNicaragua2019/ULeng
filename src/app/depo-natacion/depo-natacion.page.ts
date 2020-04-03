import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-depo-natacion',
  templateUrl: './depo-natacion.page.html',
  styleUrls: ['./depo-natacion.page.scss'],
})
export class DepoNatacionPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-deportes"]);
  }

  siguiente(){
    this.router.navigate(["/depo-tenis"]);
  }

  anterior(){
    this.router.navigate(["/depo-futbol"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}