import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sal-porfavor',
  templateUrl: './sal-porfavor.page.html',
  styleUrls: ['./sal-porfavor.page.scss'],
})
export class SalPorfavorPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-saludos"]);
  }

  anterior(){
    this.router.navigate(["/sal-hola"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }
}