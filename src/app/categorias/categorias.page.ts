import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage {

  constructor ( private router: Router ) {}

  home(){
    this.router.navigate(["/home"]);
  }

  goAbecedario(){
    this.router.navigate(["/cat-abecedario"]);
  }

  goAnimales(){
    this.router.navigate(["/cat-animales"]);
  }

  goBebidas(){
    this.router.navigate(["/cat-bebidas"]);
  }

  goColores(){
    this.router.navigate(["/cat-colores"]);
  }

  goComidas(){
    this.router.navigate(["/cat-comidas"]);
  }

  goDepartamentos(){
    this.router.navigate(["/cat-Departamentos"]);
  }

  goEmociones(){
    this.router.navigate(["/cat-Emociones"]);
  }

  goFamilia(){
    this.router.navigate(["/cat-familia"]);
  }

  goNumeros(){
    this.router.navigate(["/cat-numeros"]);
  }

  goSaludos(){
    this.router.navigate(["/cat-saludos"]);
  }

}
