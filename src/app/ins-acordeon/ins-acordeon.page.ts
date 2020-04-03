import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-ins-acordeon',
  templateUrl: './ins-acordeon.page.html',
  styleUrls: ['./ins-acordeon.page.scss'],
})
export class InsAcordeonPage {
 
  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-instrumentos"]);
  }

  siguiente(){
    this.router.navigate(["/ins-flauta"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
