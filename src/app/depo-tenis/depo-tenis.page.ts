import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-depo-tenis',
  templateUrl: './depo-tenis.page.html',
  styleUrls: ['./depo-tenis.page.scss'],
})
export class DepoTenisPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-deportes"]);
  }

  anterior(){
    this.router.navigate(["/depo-natacion"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
