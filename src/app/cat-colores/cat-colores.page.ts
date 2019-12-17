import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat-colores',
  templateUrl: './cat-colores.page.html',
  styleUrls: ['./cat-colores.page.scss'],
})
export class CatColoresPage {

  constructor(private router: Router) { }
  
  regresar_categoria(){
    this.router.navigate(["/categorias"]);
  }

  home(){
    this.router.navigate(["/home"]);
  }

  goAmarillo(){
    this.router.navigate(["/col-amarillo"]);
  }

  goAzul(){
    this.router.navigate(["/col-azul"]);
  }

  goBlanco(){
    this.router.navigate(["/col-blanco"]);
  }

  goCeleste(){
    this.router.navigate(["/col-celeste"]);
  }

  goMorado(){
    this.router.navigate(["/col-morado"]);
  }

  goNaranja(){
    this.router.navigate(["/col-naranja"]);
  }

  goNegro(){
    this.router.navigate(["/col-negro"]);
  }

  goRojo(){
    this.router.navigate(["/col-rojo"]);
  }

  goRosado(){
    this.router.navigate(["/col-rosado"]);
  }

  goVerde(){
    this.router.navigate(["/col-verde"]);
  }

}
