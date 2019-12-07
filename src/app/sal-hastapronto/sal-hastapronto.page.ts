import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sal-hastapronto',
  templateUrl: './sal-hastapronto.page.html',
  styleUrls: ['./sal-hastapronto.page.scss'],
})
export class SalHastaprontoPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-saludos"]);
  }

  siguiente(){
    this.router.navigate(["/sal-hola"]);
  }

  anterior(){
    this.router.navigate(["/sal-disculpa"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }
}
