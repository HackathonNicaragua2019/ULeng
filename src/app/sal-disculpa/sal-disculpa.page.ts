import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sal-disculpa',
  templateUrl: './sal-disculpa.page.html',
  styleUrls: ['./sal-disculpa.page.scss'],
})
export class SalDisculpaPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-saludos"]);
  }

  siguiente(){
    this.router.navigate(["/sal-hastapronto"]);
  }

  anterior(){
    this.router.navigate(["/sal-compermiso"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }
}
