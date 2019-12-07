import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sal-compermiso',
  templateUrl: './sal-compermiso.page.html',
  styleUrls: ['./sal-compermiso.page.scss'],
})
export class SalCompermisoPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-saludos"]);
  }

  siguiente(){
    this.router.navigate(["/sal-disculpa"]);
  }

  anterior(){
    this.router.navigate(["/sal-comoestas"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }
}
