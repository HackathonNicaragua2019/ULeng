import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-depo-futbol',
  templateUrl: './depo-futbol.page.html',
  styleUrls: ['./depo-futbol.page.scss'],
})
export class DepoFutbolPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-deportes"]);
  }

  siguiente(){
    this.router.navigate(["/depo-natacion"]);
  }

  anterior(){
    this.router.navigate(["/depo-beisbol"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
