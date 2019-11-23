import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ani-gallo',
  templateUrl: './ani-gallo.page.html',
  styleUrls: ['./ani-gallo.page.scss'],
})
export class AniGalloPage {

  constructor(private router: Router) { }

  home(){
    this.router.navigate(["/categorias"]);
  }

  regresar_categoria(){
    this.router.navigate(["/cat-animales"]);
  }

  siguiente(){
    this.router.navigate(["/ani-gato"]);
  }

  anterior(){
    this.router.navigate(["/ani-gallina"]);
  }

  public ocultar: boolean = false;
  accion(){
    this.ocultar = !this.ocultar;
  }

}
