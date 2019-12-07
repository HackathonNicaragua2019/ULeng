import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sal-adios',
  templateUrl: './sal-adios.page.html',
  styleUrls: ['./sal-adios.page.scss'],
})
export class SalAdiosPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-saludos"]);
  }

  siguiente(){
    this.router.navigate(["/sal-buenasnoches"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }
}
