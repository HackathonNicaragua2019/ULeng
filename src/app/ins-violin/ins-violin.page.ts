import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-ins-violin',
  templateUrl: './ins-violin.page.html',
  styleUrls: ['./ins-violin.page.scss'],
})
export class InsViolinPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-instrumentos"]);
  }

  anterior(){
    this.router.navigate(["/ins-piano"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
