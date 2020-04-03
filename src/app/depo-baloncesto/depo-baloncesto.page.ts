import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-depo-baloncesto',
  templateUrl: './depo-baloncesto.page.html',
  styleUrls: ['./depo-baloncesto.page.scss'],
})
export class DepoBaloncestoPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-deportes"]);
  }

  siguiente(){
    this.router.navigate(["/depo-beisbol"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
