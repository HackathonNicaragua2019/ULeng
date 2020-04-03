import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-depo-beisbol',
  templateUrl: './depo-beisbol.page.html',
  styleUrls: ['./depo-beisbol.page.scss'],
})
export class DepoBeisbolPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-deportes"]);
  }

  siguiente(){
    this.router.navigate(["/depo-futbol"]);
  }

  anterior(){
    this.router.navigate(["/depo-baloncesto"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}