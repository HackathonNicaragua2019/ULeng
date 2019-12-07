import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sal-comoestas',
  templateUrl: './sal-comoestas.page.html',
  styleUrls: ['./sal-comoestas.page.scss'],
})
export class SalComoestasPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-saludos"]);
  }

  siguiente(){
    this.router.navigate(["/sal-compermiso"]);
  }

  anterior(){
    this.router.navigate(["/sal-buenosdias"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }
}