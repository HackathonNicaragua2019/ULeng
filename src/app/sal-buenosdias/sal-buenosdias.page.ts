import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sal-buenosdias',
  templateUrl: './sal-buenosdias.page.html',
  styleUrls: ['./sal-buenosdias.page.scss'],
})
export class SalBuenosdiasPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-saludos"]);
  }

  siguiente(){
    this.router.navigate(["/sal-comoestas"]);
  }

  anterior(){
    this.router.navigate(["/sal-buenastardes"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }
}
