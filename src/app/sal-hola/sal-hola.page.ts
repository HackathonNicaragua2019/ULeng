import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sal-hola',
  templateUrl: './sal-hola.page.html',
  styleUrls: ['./sal-hola.page.scss'],
})
export class SalHolaPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-saludos"]);
  }

  siguiente(){
    this.router.navigate(["/sal-porfavor"]);
  }

  anterior(){
    this.router.navigate(["/sal-hastapronto"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }
}
